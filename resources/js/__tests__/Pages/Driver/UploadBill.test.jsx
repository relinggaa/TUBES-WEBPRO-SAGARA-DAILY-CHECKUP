import React from 'react';
import { render, screen, fireEvent, cleanup, waitFor, act } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { toast } from 'react-toastify';

// ============================================================
// Mock router & inertia - dibuat modular agar bisa diubah per test
// ============================================================
const mockRouterPost = vi.fn();
let mockFlash = {};

vi.mock('@inertiajs/react', () => ({
  Link: ({ children, href, className, title }) => (
    <a href={href} className={className} title={title}>
      {children}
    </a>
  ),
  usePage: () => ({
    props: {
      flash: mockFlash,
    }
  }),
  router: {
    post: mockRouterPost,
  }
}));

// Mock react-toastify
const mockToastSuccess = vi.fn();
const mockToastError = vi.fn();
vi.mock('react-toastify', () => ({
  toast: {
    success: mockToastSuccess,
    error: mockToastError,
  }
}));

// Global Window mocks for object URL
window.URL.createObjectURL = vi.fn(() => 'blob:dummy-url');
window.URL.revokeObjectURL = vi.fn();

// Import komponen yg akan ditest
const { default: UploadBill } = await import('../../../Pages/Driver/UploadBill');

// ============================================================
// Dummy Data
// ============================================================
const mockRiwayatStruk = [
  {
    id: 1,
    gambar: 'struk_bensin/dummy1.jpg',
    created_at: '2026-04-24T10:00:00Z'
  },
  {
    id: 2,
    gambar: 'struk_bensin/dummy2.jpg',
    created_at: '2026-04-23T08:30:00Z'
  }
];

// Helper: pilih file di input
async function selectFile(filename = 'struk.png', type = 'image/png') {
  const file = new File(['dummy content'], filename, { type });
  const inputEl = document.querySelector('input[type="file"]');
  fireEvent.change(inputEl, { target: { files: [file] } });
  await waitFor(() => screen.getByAltText('Preview Struk'));
  return file;
}

// ============================================================
// Test Suite
// ============================================================
describe('UploadBill Component', () => {

  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
    mockFlash = {};
  });

  // ---- Render & UI ----

  it('1. Merender halaman UploadBill dengan benar', () => {
    render(<UploadBill riwayatStruk={[]} />);

    expect(screen.getAllByText('Upload Struk Bensin').length).toBeGreaterThan(0);
    expect(screen.getByText('Daftarkan Struk Baru')).toBeDefined();
    expect(screen.getByText('Click to upload')).toBeDefined();
    const uploadBtn = screen.getByRole('button', { name: /upload struk bensin/i });
    expect(uploadBtn.disabled).toBe(true);
  });

  it('2. Menampilkan "Belum ada history" ketika riwayatStruk kosong', () => {
    render(<UploadBill riwayatStruk={[]} />);

    expect(screen.getByText('Belum ada history')).toBeDefined();
    expect(screen.getByText('Struk yang diupload akan muncul di sini')).toBeDefined();
  });

  it('3. Menampilkan riwayat struk jika riwayatStruk tidak kosong', () => {
    render(<UploadBill riwayatStruk={mockRiwayatStruk} />);

    expect(screen.queryByText('Belum ada history')).toBeNull();
    expect(screen.getByText('Struk #1')).toBeDefined();
    expect(screen.getByText('Struk #2')).toBeDefined();
  });

  it('4. Memunculkan file preview setelah input file dan tombol upload aktif', async () => {
    render(<UploadBill riwayatStruk={[]} />);

    await selectFile();

    const imgPreview = screen.getByAltText('Preview Struk');
    expect(imgPreview).toBeDefined();
    expect(imgPreview.src).toContain('blob:dummy-url');

    const uploadBtn = screen.getByRole('button', { name: /upload struk bensin/i });
    expect(uploadBtn.disabled).toBe(false);
  });

  it('5. Tombol hapus preview (X) menghapus preview dan menonaktifkan tombol upload', async () => {
    render(<UploadBill riwayatStruk={[]} />);

    await selectFile();

    // Tombol X (hapus preview) harus ada
    const removeBtns = screen.getAllByRole('button');
    // Cari tombol yang berisi SVG hapus (close icon) di area preview
    const removePreviewBtn = removeBtns.find(btn =>
      btn.querySelector('svg path[d*="M6 18L18 6"]') ||
      btn.className.includes('red') ||
      (btn.closest('.relative') && btn.querySelector('svg'))
    );
    expect(removePreviewBtn).toBeDefined();
    fireEvent.click(removePreviewBtn);

    await waitFor(() => {
      expect(screen.queryByAltText('Preview Struk')).toBeNull();
      const uploadBtn = screen.getByRole('button', { name: /upload struk bensin/i });
      expect(uploadBtn.disabled).toBe(true);
    });
  });

  it('6. Menjalankan router.post saat tombol Upload diklik dengan file valid', async () => {
    render(<UploadBill riwayatStruk={[]} />);

    const file = await selectFile();
    const uploadBtn = screen.getByRole('button', { name: /upload struk bensin/i });
    fireEvent.click(uploadBtn);

    expect(mockRouterPost).toHaveBeenCalledTimes(1);
    expect(mockRouterPost.mock.calls[0][0]).toBe('/driver/struk-bensin');

    const formDataSent = mockRouterPost.mock.calls[0][1];
    expect(formDataSent instanceof FormData).toBe(true);
    expect(formDataSent.get('gambar')).toBe(file);
  });

  it('7. onSuccess callback mereset selectedFile dan preview', async () => {
    // router.post langsung panggil onSuccess
    mockRouterPost.mockImplementation((url, data, options) => {
      options?.onSuccess?.();
    });

    render(<UploadBill riwayatStruk={[]} />);
    await selectFile();

    const uploadBtn = screen.getByRole('button', { name: /upload struk bensin/i });
    fireEvent.click(uploadBtn);

    await waitFor(() => {
      // Setelah onSuccess, preview hilang dan dropzone muncul kembali
      expect(screen.queryByAltText('Preview Struk')).toBeNull();
      expect(screen.getByText('Click to upload')).toBeDefined();
    });
  });

  it('8. onError callback memanggil toast.error', async () => {
    // router.post langsung panggil onError
    mockRouterPost.mockImplementation((url, data, options) => {
      options?.onError?.({ gambar: 'File terlalu besar' });
    });

    render(<UploadBill riwayatStruk={[]} />);
    await selectFile();

    const uploadBtn = screen.getByRole('button', { name: /upload struk bensin/i });
    fireEvent.click(uploadBtn);

    await waitFor(() => {
      expect(mockToastError).toHaveBeenCalledTimes(1);
    });
  });

  it('9. Menampilkan toast.success ketika flash.success ada', async () => {
    mockFlash = { success: 'Struk berhasil diupload!' };

    render(<UploadBill riwayatStruk={[]} />);

    await waitFor(() => {
      expect(mockToastSuccess).toHaveBeenCalledWith(
        'Struk berhasil diupload!',
        expect.objectContaining({ position: 'top-right' })
      );
    });
  });

  it('10. Menampilkan toast.error ketika flash.error ada', async () => {
    mockFlash = { error: 'Upload gagal!' };

    render(<UploadBill riwayatStruk={[]} />);

    await waitFor(() => {
      expect(mockToastError).toHaveBeenCalledWith(
        'Upload gagal!',
        expect.objectContaining({ position: 'top-right' })
      );
    });
  });

  it('11. Link "back" ke dashboard tersedia', () => {
    render(<UploadBill riwayatStruk={[]} />);
    const backLink = document.querySelector('a[href="/driver/dashboard"]');
    expect(backLink).toBeDefined();
  });
});
