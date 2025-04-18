
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, MessageSquare, Users, User } from 'lucide-react';

const DoctorDashboard = () => {
  // Mock data - in a real app this would come from an API
  const appointments = [
    { id: 1, patient: 'John Doe', date: '2025-04-19', time: '09:00 AM', status: 'Confirmed' },
    { id: 2, patient: 'Jane Smith', date: '2025-04-19', time: '10:30 AM', status: 'Confirmed' },
    { id: 3, patient: 'Robert Johnson', date: '2025-04-20', time: '02:00 PM', status: 'Pending' },
  ];

  const patients = [
    { id: 1, name: 'John Doe', age: 45, lastVisit: '2025-04-10', condition: 'Hypertension' },
    { id: 2, name: 'Jane Smith', age: 32, lastVisit: '2025-04-05', condition: 'Migraine' },
    { id: 3, name: 'Robert Johnson', age: 58, lastVisit: '2025-03-28', condition: 'Arthritis' },
    { id: 4, name: 'Emily Wilson', age: 27, lastVisit: '2025-03-15', condition: 'Allergies' },
  ];

  const messages = [
    { id: 1, from: 'John Doe', time: '09:15 AM', message: 'Doctor, my headache is getting worse.' },
    { id: 2, from: 'Jane Smith', time: 'Yesterday', message: 'Thank you for the prescription.' },
    { id: 3, from: 'Robert Johnson', time: '2 days ago', message: 'When should I schedule a follow-up?' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-medical-primary">Doctor Dashboard</h1>
          <p className="text-gray-600">Welcome back, Dr. Smith. Here's your overview for today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="bg-medical-light p-3 rounded-full">
                <Calendar className="h-6 w-6 text-medical-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Today's Appointments</p>
                <p className="text-2xl font-bold">{appointments.filter(a => a.date === '2025-04-19').length}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="bg-medical-light p-3 rounded-full">
                <Users className="h-6 w-6 text-medical-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Patients</p>
                <p className="text-2xl font-bold">{patients.length}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="bg-medical-light p-3 rounded-full">
                <MessageSquare className="h-6 w-6 text-medical-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Unread Messages</p>
                <p className="text-2xl font-bold">{messages.length}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="appointments" className="mb-8">
          <TabsList>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="patients">Patients</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>
          
          <TabsContent value="appointments" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium">Patient</th>
                        <th className="text-left py-3 px-4 font-medium">Date</th>
                        <th className="text-left py-3 px-4 font-medium">Time</th>
                        <th className="text-left py-3 px-4 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments.map((appointment) => (
                        <tr key={appointment.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">{appointment.patient}</td>
                          <td className="py-3 px-4">{appointment.date}</td>
                          <td className="py-3 px-4">{appointment.time}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded text-xs ${
                              appointment.status === 'Confirmed' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {appointment.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="patients" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Patient List</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium">Name</th>
                        <th className="text-left py-3 px-4 font-medium">Age</th>
                        <th className="text-left py-3 px-4 font-medium">Last Visit</th>
                        <th className="text-left py-3 px-4 font-medium">Condition</th>
                      </tr>
                    </thead>
                    <tbody>
                      {patients.map((patient) => (
                        <tr key={patient.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">{patient.name}</td>
                          <td className="py-3 px-4">{patient.age}</td>
                          <td className="py-3 px-4">{patient.lastVisit}</td>
                          <td className="py-3 px-4">{patient.condition}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="messages" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className="p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex justify-between mb-2">
                        <p className="font-medium">{message.from}</p>
                        <p className="text-sm text-gray-500">{message.time}</p>
                      </div>
                      <p className="text-gray-700">{message.message}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-medical-light flex items-center justify-center">
                  <User className="h-16 w-16 text-medical-primary" />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold">Dr. Sarah Smith</h3>
                  <p className="text-gray-600">General Practitioner</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p>dr.smith@medibot.com</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p>+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">License</p>
                    <p>MD-12345678</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Specialization</p>
                    <p>Family Medicine</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Working Hours</p>
                  <p>Monday to Friday, 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default DoctorDashboard;
