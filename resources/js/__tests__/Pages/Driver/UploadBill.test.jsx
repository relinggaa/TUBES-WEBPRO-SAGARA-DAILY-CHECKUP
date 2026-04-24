import React from 'react';
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// ============================================================
// Mock router & inertia
// ============================================================
const mockRouterPost = vi.fn();

vi.mock('@inertiajs/react', () => ({
  Link: ({ children, href, className, title }) => (
    <a href={href} className={className} title={title}>
      {children}
    </a>
  ),
  usePage: () => ({
    props: {
      flash: {},
    }
  }),
  router: {
    post: mockRouterPost,
  }
}));

// Mock react-toastify
vi.mock('react-toastify', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
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

// ============================================================
// Test Suite
// ============================================================
describe('UploadBill Component', () => {

  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('1. Merender halaman UploadBill dengan benar', () => {
    render(<UploadBill riwayatStruk={[]} />);
    
    // Title halaman
    expect(screen.getByText('Upload Struk Bensin')).toBeDefined();
    // Bagian Daftarkan Struk
    expect(screen.getByText('Daftarkan Struk Baru')).toBeDefined();
    // Teks default dropzone
    expect(screen.getByText('Click to upload')).toBeDefined();
    // Tombol upload dalam keadaan disable secara default
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
    
    // Pastikan history string tidak ada
    expect(screen.queryByText('Belum ada history')).toBeNull();
    
    // Struk #1, #2 muncul
    expect(screen.getByText('Struk #1')).toBeDefined();
    expect(screen.getByText('Struk #2')).toBeDefined();
  });

  it('4. Memunculkan file preview setelah input file dan tombol aktif', async () => {
    render(<UploadBill riwayatStruk={[]} />);
    
    const file = new File(['dummy content'], 'struk.png', { type: 'image/png' });
    const inputEl = screen.getByLabelText(/Click to upload/i) || document.querySelector('input[type="file"]');
    
    fireEvent.change(inputEl, { target: { files: [file] } });

    // Preview img test (dikarenakan URL mockup)
    await waitFor(() => {
      const imgPreview = screen.getByAltText('Preview Struk');
      expect(imgPreview).toBeDefined();
      expect(imgPreview.src).toContain('blob:dummy-url');
      
      const uploadBtn = screen.getByRole('button', { name: /upload struk bensin/i });
      expect(uploadBtn.disabled).toBe(false); // Tombol upload harus aktif
    });
  });

  it('5. Menjalankan router.post saat submit di-klik dengan file valis', async () => {
    render(<UploadBill riwayatStruk={[]} />);
    
    const file = new File(['dummy content'], 'struk.png', { type: 'image/png' });
    const inputEl = document.querySelector('input[type="file"]');
    
    fireEvent.change(inputEl, { target: { files: [file] } });

    await waitFor(() => {
        expect(screen.getByAltText('Preview Struk')).toBeDefined();
    });

    const uploadBtn = screen.getByRole('button', { name: /upload struk bensin/i });
    fireEvent.click(uploadBtn);

    expect(mockRouterPost).toHaveBeenCalledTimes(1);
    expect(mockRouterPost.mock.calls[0][0]).toBe('/driver/struk-bensin');
    
    // Memeriksa body merupakan objek FormData
    const formDataSent = mockRouterPost.mock.calls[0][1];
    expect(formDataSent instanceof FormData).toBe(true);
    expect(formDataSent.get('gambar')).toBe(file);
  });
});
