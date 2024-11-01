import React, { useState } from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { FaBars, FaTimes, FaUser, FaChartLine, FaCog, FaSun, FaMoon } from 'react-icons/fa';

// Register required components for charts
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Tooltip, Legend, ArcElement);

const AdminDashboard = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleThemeToggle = () => setDarkMode(!darkMode);
    const handleSidebarToggle = () => setSidebarOpen(!sidebarOpen);

    // Data for charts
    const userVisitsData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Monthly Active Users',
            data: [850, 900, 1020, 970, 1080, 1150],
            backgroundColor: darkMode ? '#6a5acd' : '#4A90E2',
        }],
    };

    const revenueData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Monthly Revenue ($)',
            data: [1500, 2200, 3200, 2800, 3300, 4200],
            borderColor: darkMode ? '#FFB74D' : '#F39C12',
            backgroundColor: darkMode ? 'rgba(255,183,77,0.2)' : 'rgba(243,156,18,0.2)',
            fill: true,
            tension: 0.3,
        }],
    };

    const salesData = {
        labels: ['Bikes', 'Accessories', 'Apparel', 'Parts'],
        datasets: [{
            data: [350, 450, 150, 200],
            backgroundColor: darkMode ? ['#ff6f61', '#ffa600', '#ffbf00', '#37a6a6'] : ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            hoverBackgroundColor: darkMode ? ['#ff4b48', '#ff9100', '#ffab00', '#2a7979'] : ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        }],
    };

    const themeStyles = {
        background: darkMode ? '#1b1b1b' : '#f5f5f5',
        color: darkMode ? '#e0e0e0' : '#333',
    };

    return (
        <div style={{ ...styles.container, ...themeStyles }}>
            {/* Navbar */}
            <div style={styles.navbar}>
                <button style={styles.menuIcon} onClick={handleSidebarToggle}>
                    {sidebarOpen ? <FaTimes /> : <FaBars />}
                </button>
                <h2 style={styles.title}>Admin Dashboard</h2>
                <button style={styles.themeToggle} onClick={handleThemeToggle}>
                    {darkMode ? <FaSun /> : <FaMoon />}
                </button>
            </div>

            {/* Sidebar */}
            <div style={{
                ...styles.sidebar,
                transform: sidebarOpen ? 'translateX(0)' : 'translateX(-250px)',
                backgroundColor: darkMode ? '#333' : '#fff'
            }}>
                <ul style={styles.sidebarList}>
                    <li style={styles.sidebarItem}><FaUser /> User Management</li>
                    <li style={styles.sidebarItem}><FaChartLine /> Performance</li>
                    <li style={styles.sidebarItem}><FaCog /> Settings</li>
                </ul>
            </div>

            {/* Main Content */}
            <div style={{ ...styles.mainContent, marginLeft: sidebarOpen ? '250px' : '0' }}>
                {/* Data Cards */}
                <div style={styles.cardContainer}>
                    <div style={{ ...styles.card, backgroundColor: darkMode ? '#444' : '#fff' }}>
                        <h3>Total Users</h3>
                        <p style={styles.dataText}>1,250</p>
                    </div>
                    <div style={{ ...styles.card, backgroundColor: darkMode ? '#444' : '#fff' }}>
                        <h3>Monthly Revenue</h3>
                        <p style={styles.dataText}>$4,200</p>
                    </div>
                    <div style={{ ...styles.card, backgroundColor: darkMode ? '#444' : '#fff' }}>
                        <h3>Pending Orders</h3>
                        <p style={styles.dataText}>28</p>
                    </div>
                    <div style={{ ...styles.card, backgroundColor: darkMode ? '#444' : '#fff' }}>
                        <h3>Monthly Sales</h3>
                        <p style={styles.dataText}>1,450 Units</p>
                    </div>
                </div>

                {/* Charts Section */}
                <div style={styles.chartContainer}>
                    <div style={{ ...styles.chart, backgroundColor: darkMode ? '#444' : '#fff' }}>
                        <h3>Monthly Active Users</h3>
                        <Bar data={userVisitsData} options={chartOptions} />
                    </div>
                    <div style={{ ...styles.chart, backgroundColor: darkMode ? '#444' : '#fff' }}>
                        <h3>Revenue Over Time</h3>
                        <Line data={revenueData} options={chartOptions} />
                    </div>
                </div>

                <div style={styles.chartContainer}>
                    <div style={{ ...styles.chart, backgroundColor: darkMode ? '#444' : '#fff' }}>
                        <h3>Sales Distribution</h3>
                        <Doughnut data={salesData} options={chartOptions} />
                    </div>
                </div>

                {/* Recent Users Table */}
                <div style={{ ...styles.recentUsersSection, backgroundColor: darkMode ? '#444' : '#fff' }}>
                    <h3>Recent Users</h3>
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Join Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { id: 'U001', name: 'Alice Johnson', email: 'alice@example.com', date: '2024-10-01' },
                                { id: 'U002', name: 'Bob Smith', email: 'bob@example.com', date: '2024-10-05' },
                                { id: 'U003', name: 'Charlie Brown', email: 'charlie@example.com', date: '2024-10-10' },
                                { id: 'U004', name: 'Diana Prince', email: 'diana@example.com', date: '2024-10-15' },
                            ].map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
        transition: 'background-color 0.3s ease, color 0.3s ease',
    },
    navbar: {
        position: 'fixed',
        top: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '15px 30px',
        backgroundColor: '#222',
        color: '#fff',
        zIndex: 1000,
    },
    menuIcon: {
        fontSize: '1.5em',
        cursor: 'pointer',
        color: '#fff',
        background: 'none',
        border: 'none',
    },
    title: {
        fontSize: '1.8em',
        fontWeight: '600',
    },
    themeToggle: {
        fontSize: '1.2em',
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        color: '#fff',
    },
    sidebar: {
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100%',
        width: '250px',
        padding: '20px',
        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.3)',
        transition: 'transform 0.3s ease',
        zIndex: 999,
    },
    sidebarList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    sidebarItem: {
        padding: '15px 10px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
    },
    mainContent: {
        marginTop: '60px',
        padding: '30px',
        transition: 'margin-left 0.3s ease',
        flex: '1',
    },
    cardContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px',
        marginBottom: '20px',
    },
    card: {
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    },
    dataText: {
        fontSize: '2em',
        fontWeight: 'bold',
    },
    chartContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '20px',
        marginBottom: '20px',
    },
    chart: {
        flex: '1 1 45%',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.3s ease, color 0.3s ease',
        maxHeight: '400px', // Fixed height for chart stability
    },
    recentUsersSection: {
        marginTop: '20px',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    th: {
        backgroundColor: '#f2f2f2',
        color: '#333',
    },
};

const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
};

export default AdminDashboard;
