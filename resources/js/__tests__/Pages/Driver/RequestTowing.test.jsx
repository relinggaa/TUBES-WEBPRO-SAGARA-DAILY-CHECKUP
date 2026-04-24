import React from 'react';
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';

// ============================================================
// Mock inertia
// ============================================================
const mockRouterPost = vi.fn();

vi.mock('@inertiajs/react', () => ({
  Link: ({ children, href, className }) => (
    <a href={href} className={className}>{children}</a>
  ),
  usePage: () => ({
    props: { flash: {} }
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

// Mock Global Fetch untuk API Nominatim
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ display_name: 'Jalan Sudirman, Jakarta' }),
  })
);

// Mock `navigator.geolocation`
const mockGetCurrentPosition = vi.fn().mockImplementation((success) => 
  success({
    coords: {
      latitude: -6.200000,
      longitude: 106.816666
    }
  })
);
global.navigator.geolocation = {
  getCurrentPosition: mockGetCurrentPosition,
};

// ============================================================
// Mock window.L (Leaflet)
// ============================================================
beforeEach(() => {
  window.L = {
    map: vi.fn(() => ({
      setView: vi.fn(),
      on: vi.fn(),
      getCenter: vi.fn(() => ({ lat: -6.2088, lng: 106.8456 })),
      getZoom: vi.fn(() => 16),
      remove: vi.fn(),
      removeLayer: vi.fn(),
    })),
    tileLayer: vi.fn(() => ({ addTo: vi.fn() })),
    marker: vi.fn(() => ({
      addTo: vi.fn().mockReturnThis(),
      bindPopup: vi.fn().mockReturnThis(),
      openPopup: vi.fn().mockReturnThis(),
      setLatLng: vi.fn(),
    })),
    divIcon: vi.fn()
  };
});

// Lazy import setelah mock
const { default: RequestTowing } = await import('../../../Pages/Driver/RequestTowing');

// ============================================================
// Dummy Data
// ============================================================
const mockActiveTowing = {
  id: 10,
  lokasi: 'Tol Dalam Kota KM 10',
  status: 'Pending',
};

// ============================================================
// Test Suite
// ============================================================
describe('RequestTowing Component', () => {

  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('1. Merender halaman Request Towing dengan benar', async () => {
    render(<RequestTowing riwayatTowing={[]} activeTowing={null} />);

    // Memeriksa header
    expect(screen.getByText('Request Towing')).toBeDefined();
    
    // Memeriksa keberadaan tombol fitur
    expect(screen.getByText('Gunakan Lokasi GPS Saya')).toBeDefined();
    expect(screen.getByText('Ajukan Request Towing')).toBeDefined();
    
    // Memastikan API reverse geocode dijalankan secara otomatis saat render
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
    });
  });

  it('2. Form alamat terisi otomatis setelah fetch API lokasi', async () => {
    render(<RequestTowing riwayatTowing={[]} activeTowing={null} />);

    await waitFor(() => {
      // Mengecek textarea sudah terisi string yang diset di mock fetch
      const textArea = screen.getByPlaceholderText('Lokasi will be auto-filled from map, or type manually...');
      expect(textArea.value).toBe('Jalan Sudirman, Jakarta');
    });
  });

  it('3. Menjalankan geolocation ketika tombol GPS diklik', async () => {
    render(<RequestTowing riwayatTowing={[]} activeTowing={null} />);

    const gpsBtn = screen.getByText('Gunakan Lokasi GPS Saya');
    fireEvent.click(gpsBtn);

    await waitFor(() => {
      expect(mockGetCurrentPosition).toHaveBeenCalled();
    });
  });

  it('4. Memanggil POST request untuk mengajukan Towing', async () => {
    render(<RequestTowing riwayatTowing={[]} activeTowing={null} />);

    // Tunggu nilai lokasi default masuk dulu
    await waitFor(() => {
      expect(screen.getByPlaceholderText('Lokasi will be auto-filled from map, or type manually...').value).toBe('Jalan Sudirman, Jakarta');
    });

    const keteranganInput = screen.getByPlaceholderText('Contoh: Ban kempis di tengah jalan tol...');
    fireEvent.change(keteranganInput, { target: { value: 'Mobil mogok, mesin mati' } });

    const ajukanBtn = screen.getByText('Ajukan Request Towing');
    fireEvent.click(ajukanBtn);

    await waitFor(() => {
      expect(mockRouterPost).toHaveBeenCalledTimes(1);
      
      const payloadArg = mockRouterPost.mock.calls[0][1];
      expect(payloadArg.lokasi).toBe('Jalan Sudirman, Jakarta');
      expect(payloadArg.keterangan).toBe('Mobil mogok, mesin mati');
    });
  });

  it('5. Tampil banner pengajuan aktif jika sedang ada towing Pending', () => {
    render(<RequestTowing riwayatTowing={[]} activeTowing={mockActiveTowing} />);

    expect(screen.getByText('Pengajuan Aktif #10')).toBeDefined();
    expect(screen.getByText('Tol Dalam Kota KM 10')).toBeDefined();
    
    // Tombol ajukan towing tidak ada
    expect(screen.queryByText('Ajukan Request Towing')).toBeNull();
  });

  it('6. Dapat membatalkan pengajuan towing yang aktif', async () => {
    // Override window.confirm agar otomatis bernilai true tanpa interaksi manual
    const confirmSpy = vi.spyOn(window, 'confirm').mockImplementation(() => true);

    render(<RequestTowing riwayatTowing={[]} activeTowing={mockActiveTowing} />);

    // Cari tombol batal di banner pengajuan aktif. Tombolnya hanya ikon X.
    // Karena tombol ini memiliki title="Batalkan", kita bisa mengambil dari title
    const batalBtn = screen.getByTitle('Batalkan');
    expect(batalBtn).toBeDefined();

    fireEvent.click(batalBtn);

    await waitFor(() => {
      expect(confirmSpy).toHaveBeenCalledTimes(1);
      expect(mockRouterPost).toHaveBeenCalledTimes(1);
      const endpoint = mockRouterPost.mock.calls[0][0];
      const data = mockRouterPost.mock.calls[0][1];
      
      expect(endpoint).toBe('/driver/towing/cancel');
      expect(data.towing_id).toBe(10);
    });

    confirmSpy.mockRestore();
  });

  it('7. Membatalkan pengajuan (confirm false) tidak akan memanggil post', async () => {
    const confirmSpy = vi.spyOn(window, 'confirm').mockImplementation(() => false);
    render(<RequestTowing riwayatTowing={[]} activeTowing={mockActiveTowing} />);
    
    fireEvent.click(screen.getByTitle('Batalkan'));
    expect(mockRouterPost).not.toHaveBeenCalled();
    
    confirmSpy.mockRestore();
  });

  it('8. Panggil API reverse geocode tapi throw error fallback ke coordinate', async () => {
    global.fetch.mockImplementationOnce(() => Promise.reject(new Error('Network Err')));
    
    render(<RequestTowing riwayatTowing={[]} activeTowing={null} />);
    
    await waitFor(() => {
      const textArea = screen.getByPlaceholderText('Lokasi will be auto-filled from map, or type manually...');
      expect(textArea.value).toBe('-6.20880, 106.84560'); // nilai fallback
    });
  });

  it('9. Memanggil Geolocation tapi diblokir/error', async () => {
    const mockGetCurrentPositionError = vi.fn().mockImplementation((success, error) => 
      error({ message: 'User denied' })
    );
    // Simpan aslinya jika perlu
    global.navigator.geolocation.getCurrentPosition = mockGetCurrentPositionError;
    
    render(<RequestTowing riwayatTowing={[]} activeTowing={null} />);
    
    const gpsBtn = screen.getByText('Gunakan Lokasi GPS Saya');
    fireEvent.click(gpsBtn);
    
    await waitFor(() => {
      expect(mockToastError).toHaveBeenCalledWith(expect.stringContaining('Gagal mendapatkan lokasi GPS: User denied'), expect.any(Object));
    });
    
    // Restore
    global.navigator.geolocation.getCurrentPosition = mockGetCurrentPosition;
  });

  it('10. Browser tidak mendukung Geolocation', async () => {
    const originalGeo = global.navigator.geolocation;
    delete global.navigator.geolocation;
    
    render(<RequestTowing riwayatTowing={[]} activeTowing={null} />);
    
    const gpsBtn = screen.getByText('Gunakan Lokasi GPS Saya');
    fireEvent.click(gpsBtn);
    
    expect(mockToastError).toHaveBeenCalledWith('Browser tidak mendukung geolokasi.', expect.any(Object));
    
    global.navigator.geolocation = originalGeo;
  });

  it('11. Button Submit tidak bisa berjalan jika Lokasi Blank', async () => {
    render(<RequestTowing riwayatTowing={[]} activeTowing={null} />);
    
    await waitFor(() => {
      const textArea = screen.getByPlaceholderText('Lokasi will be auto-filled from map, or type manually...');
      fireEvent.change(textArea, { target: { value: '   ' } });
    });
    
    const ajukanBtn = screen.getByRole('button', { name: /Ajukan Request Towing/i });
    
    expect(ajukanBtn.disabled).toBe(true);
    
    // Walau diklik paksa, fungsi post tidak dpanggil
    fireEvent.click(ajukanBtn);
    expect(mockRouterPost).not.toHaveBeenCalled();
  });

  it('12. Leaflet move, moveend, dan click trigger test', async () => {
    render(<RequestTowing riwayatTowing={[]} activeTowing={null} />);
    
    let moveCb, moveEndCb, clickCb;
    
    await waitFor(() => {
      const calls = window.L.map.mock.results[0].value.on.mock.calls;
      moveCb = calls.find(c => c[0] === 'move');
      moveEndCb = calls.find(c => c[0] === 'moveend');
      clickCb = calls.find(c => c[0] === 'click');
      expect(moveCb).toBeDefined();
    });

    const setViewMock = window.L.map.mock.results[0].value.setView;
    
    // Test klik peta
    clickCb[1]({ latlng: { lat: -6.1, lng: 106.8 } });
    expect(setViewMock).toHaveBeenCalled();
    
    // Test move
    moveCb[1]();
    
    // Test moveend
    global.fetch.mockClear();
    moveEndCb[1]();
    expect(global.fetch).toHaveBeenCalled();
  });

  it('13. Callback onSuccess dan onError dari Submit', async () => {
    render(<RequestTowing riwayatTowing={[]} activeTowing={null} />);
    
    await waitFor(() => {
      expect(screen.getByPlaceholderText(/type manually/i).value).toBe('Jalan Sudirman, Jakarta');
    });
    
    fireEvent.click(screen.getByRole('button', { name: /Ajukan Request Towing/i }));
    
    await waitFor(() => {
      const options = mockRouterPost.mock.calls[0][2];
      expect(options.onSuccess).toBeDefined();
      expect(options.onError).toBeDefined();
      
      // Simulate callbacks
      options.onSuccess();
      options.onError();
    });
  });

});
