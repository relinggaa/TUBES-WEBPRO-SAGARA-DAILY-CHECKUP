import React from 'react';
import LayoutAdmin from '../../layout/LayoutAdmin';
import { useTheme } from '../../contexts/ThemeContext';
import Header from '../../components/admin/DashboardAdmin/Header';
import Stats from '../../components/admin/DashboardAdmin/Stats';
import QuickActions from '../../components/admin/DashboardAdmin/QuickActions';
import Chart from '../../components/admin/DashboardAdmin/Chart';
import RecentActivities from '../../components/admin/DashboardAdmin/RecentActivities';

const DashboardAdmin = () => {
    const { currentTheme } = useTheme();
    const stats = [
        {
            title: 'Total Pengajuan',
            value: '24',
            description: 'Pengajuan yang masuk bulan ini',
        },
        {
            title: 'Perbaikan Selesai',
            value: '18',
            description: 'Perbaikan yang telah diselesaikan',
        },
        {
            title: 'Pending Review',
            value: '6',
            description: 'Menunggu persetujuan',
        },
        {
            title: 'Total Biaya',
            value: '110+',
            description: 'Jutaan rupiah bulan ini',
        },
    ];

    const recentActivities = [
        { id: 1, activity: 'Pengajuan perbaikan baru diterima', time: '2 jam lalu', type: 'info' },
        { id: 2, activity: 'Perbaikan #123 telah disetujui', time: '5 jam lalu', type: 'success' },
        { id: 3, activity: 'Laporan biaya bulan ini telah dibuat', time: '1 hari lalu', type: 'info' },
        { id: 4, activity: 'Key baru telah di-generate', time: '2 hari lalu', type: 'warning' },
    ];
   
    return (
        <LayoutAdmin>
            <div className="space-y-12">
                {/* Header Card */}
                <Header currentTheme={currentTheme} />

                {/* Stats Grid */}
                <Stats stats={stats} currentTheme={currentTheme} />

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Recent Activities */}
                    <RecentActivities recentActivities={recentActivities} currentTheme={currentTheme} />

                    {/* Quick Actions */}
                    <QuickActions currentTheme={currentTheme} />
                </div>

                {/* Chart Section Placeholder */}
                <Chart currentTheme={currentTheme} />
        </div>
        </LayoutAdmin>
    );
};

export default DashboardAdmin;