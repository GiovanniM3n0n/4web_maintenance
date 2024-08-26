"use client";

import React, { useState, useEffect } from "react";
import { FaPlus, FaBell, FaUser, FaCheckCircle } from "react-icons/fa";
import { MdForklift } from "react-icons/md";
import Footer from "./components/footer";
import Aside from "./components/aside";
import MachineList from "./components/machineList";
import MaintenanceList from "./components/maintenanceList";
import MachineForm from "./components/machineForm";
import MaintenanceForm from "./components/maintenanceForm";
import DashboardChart from "./components/dashboardChart";
import { Machine, Maintenance } from "../app/types";
import Card from "./components/card";

const Home: React.FC = () => {
    const [showMachineForm, setShowMachineForm] = useState(false);
    const [showMaintenanceForm, setShowMaintenanceForm] = useState(false);
    const [machines, setMachines] = useState<Machine[]>([]);
    const [maintenanceList, setMaintenanceList] = useState<Maintenance[]>([]);
    const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleTimeString());
    const [showUserMenu, setShowUserMenu] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleAddMachine = () => setShowMachineForm(true);
    const handleAddMaintenance = () => setShowMaintenanceForm(true);
    const handleCloseMachineForm = () => setShowMachineForm(false);
    const handleCloseMaintenanceForm = () => setShowMaintenanceForm(false);
    const handleSaveMachine = (machine: Machine) => {
        setMachines([...machines, machine]);
        handleCloseMachineForm();
    };
    const handleSaveMaintenance = (maintenance: Maintenance) => {
        setMaintenanceList([...maintenanceList, maintenance]);
        handleCloseMaintenanceForm();
    };
    const handleEditMachine = (id: string) => {
        console.log("Editar máquina:", id);
    };
    const handleDeleteMachine = (id: string) => {
        setMachines(machines.filter((machine) => machine.id !== id));
        console.log("Excluir máquina:", id);
    };
    const handleEditMaintenance = (id: string) => {
        console.log("Editar manutenção:", id);
    };
    const handleDeleteMaintenance = (id: string) => {
        setMaintenanceList(maintenanceList.filter((maintenance) => maintenance.id !== id));
        console.log("Excluir manutenção:", id);
    };

    const handleUserMenuToggle = () => setShowUserMenu(!showUserMenu);
    const handleLogout = () => {
        console.log("Logout");
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Aside />
            <div className="flex flex-col flex-1 ml-64">
                <main className="flex-1 p-8 bg-gradient-to-br from-gray-100 to-gray-200">
                    <header className="mb-10 relative">
                        <h1 className="text-4xl font-bold text-[#3589C5]">Painel de Controle</h1>
                        <div className="absolute top-0 right-0 flex items-center space-x-4">
                            <FaBell className="text-[#E15D13] text-2xl cursor-pointer hover:text-orange-600 transition" />
                            <div className="relative">
                                <button
                                    onClick={handleUserMenuToggle}
                                    className="flex items-center space-x-2 text-[#3589C5] hover:text-blue-600 transition"
                                >
                                    <FaUser className="text-2xl" />
                                </button>
                                {showUserMenu && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                                        <ul className="py-2 text-gray-800">
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                >
                                                    Perfil
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                >
                                                    Configurações
                                                </a>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={handleLogout}
                                                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                                                >
                                                    Sair
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </header>
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
                        <Card
                            title="Equipamentos"
                            icon={<MdForklift className="text-[#E15D13]" />}
                            value="74"
                            info="Total de equipamentos, incluindo os em operação e em manutenção."
                            bgColor="bg-[#E15D13] text-white"
                            className="flex flex-col items-center p-6 rounded-lg shadow-lg"
                        />
                        <Card
                            title="Manutenções Pendentes"
                            icon={<FaCheckCircle className="text-red-600" />}
                            value="32"
                            info="Inclui as manutenções pendentes, com detalhes sobre as datas e criticidade."
                            bgColor="bg-red-500 text-white"
                            className="flex flex-col items-center p-6 rounded-lg shadow-lg"
                        />
                    </section>

                    <section className="mb-10">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-3xl font-semibold text-[#3589C5]">Máquinas</h2>
                            <button
                                onClick={handleAddMachine}
                                className="button-large bg-[#3589C5] text-white rounded-full px-6 py-3 shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                            >
                                <FaPlus className="text-lg" /> Adicionar
                            </button>
                        </div>
                        <MachineList
                            machines={machines}
                            onEdit={handleEditMachine}
                            onDelete={handleDeleteMachine}
                        />
                    </section>
                    <section className="mb-10">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-3xl font-semibold text-[#3589C5]">Manutenções</h2>
                            <button
                                onClick={handleAddMaintenance}
                                className="button-large bg-[#E15D13] text-white rounded-full px-6 py-3 shadow-lg hover:bg-orange-700 transition-transform transform hover:scale-105"
                            >
                                <FaPlus className="text-lg" /> Adicionar
                            </button>
                        </div>
                        <MaintenanceList
                            maintenanceList={maintenanceList}
                            onEdit={handleEditMaintenance}
                            onDelete={handleDeleteMaintenance}
                            machines={machines}
                        />
                    </section>
                    <section>
                        <DashboardChart />
                    </section>
                </main>
                <Footer />
            </div>
            {showMachineForm && (
                <MachineForm
                    onSave={handleSaveMachine}
                    onCancel={handleCloseMachineForm}
                />
            )}
            {showMaintenanceForm && (
                <MaintenanceForm
                    onSave={handleSaveMaintenance}
                    onCancel={handleCloseMaintenanceForm}
                    machines={machines}
                />
            )}
        </div>
    );
};

export default Home;
