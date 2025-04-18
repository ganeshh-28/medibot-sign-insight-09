
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MessageSquare, User, Stethoscope, FileText, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PatientDashboard = () => {
  // Mock data - in a real app this would come from an API
  const doctors = [
    { id: 1, name: 'Dr. Sarah Smith', specialty: 'General Practitioner', available: true },
    { id: 2, name: 'Dr. Michael Johnson', specialty: 'Cardiologist', available: true },
    { id: 3, name: 'Dr. Emily Wilson', specialty: 'Dermatologist', available: false },
    { id: 4, name: 'Dr. Robert Brown', specialty: 'Neurologist', available: true },
  ];

  const appointments = [
    { id: 1, doctor: 'Dr. Sarah Smith', date: '2025-04-25', time: '10:00 AM', status: 'Scheduled' },
    { id: 2, doctor: 'Dr. Michael Johnson', date: '2025-05-03', time: '02:30 PM', status: 'Scheduled' },
  ];

  const medicalHistory = [
    { id: 1, date: '2025-03-15', doctor: 'Dr. Sarah Smith', diagnosis: 'Common Cold', notes: 'Prescribed rest and fluids' },
    { id: 2, date: '2025-01-10', doctor: 'Dr. Michael Johnson', diagnosis: 'Annual Checkup', notes: 'All vitals normal' },
    { id: 3, date: '2024-11-20', doctor: 'Dr. Emily Wilson', diagnosis: 'Skin Rash', notes: 'Prescribed topical cream' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-medical-primary">Patient Dashboard</h1>
          <p className="text-gray-600">Welcome back, John Doe. Here's your health overview.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="bg-medical-light p-3 rounded-full">
                <Calendar className="h-6 w-6 text-medical-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Upcoming Appointments</p>
                <p className="text-2xl font-bold">{appointments.length}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="bg-medical-light p-3 rounded-full">
                <Stethoscope className="h-6 w-6 text-medical-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Available Doctors</p>
                <p className="text-2xl font-bold">{doctors.filter(d => d.available).length}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="bg-medical-light p-3 rounded-full">
                <FileText className="h-6 w-6 text-medical-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Medical Records</p>
                <p className="text-2xl font-bold">{medicalHistory.length}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <Card className="bg-medical-light border-none">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="bg-medical-primary text-white p-4 rounded-full">
                  <MessageSquare className="h-10 w-10" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Need Quick Medical Advice?</h3>
                  <p className="text-gray-600 mb-4">
                    Consult with our AI chatbot for immediate assistance with your symptoms.
                  </p>
                </div>
                <Button size="lg" asChild>
                  <Link to="/chat">Start Chatbot Consultation</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="doctors" className="mb-8">
          <TabsList>
            <TabsTrigger value="doctors">Find Doctors</TabsTrigger>
            <TabsTrigger value="appointments">My Appointments</TabsTrigger>
            <TabsTrigger value="history">Medical History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="doctors" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Doctor List</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {doctors.map((doctor) => (
                    <div key={doctor.id} className="border rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-medical-light flex items-center justify-center">
                          <User className="h-6 w-6 text-medical-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{doctor.name}</h3>
                          <p className="text-sm text-gray-600">{doctor.specialty}</p>
                          <div className="flex items-center mt-2">
                            <span className={`inline-block w-2 h-2 rounded-full ${doctor.available ? 'bg-green-500' : 'bg-red-500'} mr-2`}></span>
                            <span className="text-xs">{doctor.available ? 'Available Today' : 'Unavailable'}</span>
                          </div>
                        </div>
                        <Button size="sm" disabled={!doctor.available}>
                          Book
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="appointments" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>My Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                {appointments.length > 0 ? (
                  <div className="space-y-4">
                    {appointments.map((appointment) => (
                      <div key={appointment.id} className="border rounded-lg p-4 hover:bg-gray-50">
                        <div className="flex items-center gap-4">
                          <div className="bg-medical-light p-3 rounded-full">
                            <Calendar className="h-5 w-5 text-medical-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{appointment.doctor}</p>
                            <div className="flex items-center mt-1">
                              <Clock className="h-4 w-4 text-gray-500 mr-2" />
                              <span className="text-sm text-gray-600">
                                {appointment.date} at {appointment.time}
                              </span>
                            </div>
                          </div>
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                            {appointment.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500 mb-4">You don't have any upcoming appointments.</p>
                    <Button asChild>
                      <Link to="#book">Book an Appointment</Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="history" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Medical History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium">Date</th>
                        <th className="text-left py-3 px-4 font-medium">Doctor</th>
                        <th className="text-left py-3 px-4 font-medium">Diagnosis</th>
                        <th className="text-left py-3 px-4 font-medium">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {medicalHistory.map((record) => (
                        <tr key={record.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">{record.date}</td>
                          <td className="py-3 px-4">{record.doctor}</td>
                          <td className="py-3 px-4">{record.diagnosis}</td>
                          <td className="py-3 px-4">{record.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card id="book" className="mb-8">
          <CardHeader>
            <CardTitle>Book a New Appointment</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              Select a doctor and preferred time slot to schedule your next appointment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Select Doctor</label>
                <select className="w-full p-2 border rounded-md">
                  <option value="">Choose a doctor</option>
                  {doctors.filter(d => d.available).map(doctor => (
                    <option key={doctor.id} value={doctor.id}>{doctor.name} - {doctor.specialty}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Select Date</label>
                <input type="date" className="w-full p-2 border rounded-md" min={new Date().toISOString().split('T')[0]} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Select Time</label>
                <select className="w-full p-2 border rounded-md">
                  <option value="">Choose a time</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="13:00">01:00 PM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                </select>
              </div>
            </div>
            <Button className="mt-6">Schedule Appointment</Button>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default PatientDashboard;
