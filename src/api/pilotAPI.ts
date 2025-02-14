import { Pilot } from '../types/pilot';

// NOTE: unfortunately browser does not support fs read/write
// therefore I had to place mocked data object here

let pilots: Pilot[] = [
  {
    id: 'pilot1',
    name: 'John Doe',
    phone: '123-456-7890',
    email: 'john.doe@example.com',
    street_address: '1234 Elm St',
    zip_code: '12345',
    description:
      'Experienced drone pilot with over 5 years of flying high-tech drones. Specializes in both indoor and outdoor operations, ensuring precise and efficient flight control at all times. Dedicated to safe and reliable drone operation.',
    operator_number: 'op001',
    status: 'In Flight',
  },
  {
    id: 'pilot2',
    name: 'Jane Smith',
    phone: '234-567-8901',
    email: 'jane.smith@example.com',
    street_address: '2345 Oak Rd',
    zip_code: '23456',
    description:
      'A highly skilled drone pilot with a background in aerial photography. With a focus on safety, Jane excels in complex flight missions, ensuring smooth operations even in challenging conditions. Equipped with advanced technical knowledge.',
    operator_number: 'op002',
    status: 'Actual',
  },
  {
    id: 'pilot3',
    name: 'Alice Johnson',
    phone: '345-678-9012',
    email: 'alice.johnson@example.com',
    street_address: '3456 Pine Ave',
    zip_code: '34567',
    description:
      'Professional drone pilot with a strong focus on industrial inspections. Alice’s experience includes inspecting power lines, towers, and wind turbines, using drones for high-precision aerial surveys, maximizing efficiency in every mission.',
    operator_number: 'op003',
    status: 'In Flight',
  },
  {
    name: 'Bob Brown',
    phone: '456-789-0123',
    id: 'pilot4',
    email: 'bob.brown@example.com',
    street_address: '4567 Birch Blvd',
    zip_code: '45678',
    description:
      'Drone expert specialized in agricultural aerial surveys. Bob has over 7 years of experience using drones to assist with crop monitoring, providing data to farmers to improve crop yield and reduce operational costs. A safety-first approach.',
    operator_number: 'op004',
    status: 'Deleted',
  },
  {
    name: 'Charlie Davis',
    phone: '567-890-1234',
    id: 'pilot5',
    email: 'charlie.davis@example.com',
    street_address: '5678 Cedar Dr',
    zip_code: '56789',
    description:
      'A seasoned drone pilot known for her work in wildlife conservation. Charlie has conducted numerous wildlife surveys using drones, gathering data that aids in the protection of endangered species and their habitats. Highly skilled and efficient.',
    operator_number: 'op005',
    status: 'In Flight',
  },
  {
    name: 'David Wilson',
    phone: '678-901-2345',
    id: 'pilot6',
    email: 'david.wilson@example.com',
    street_address: '6789 Maple Ln',
    zip_code: '67890',
    description:
      'David is a dedicated drone pilot working with environmental NGOs. With a focus on sustainability, he uses drones for forest monitoring, helping to detect illegal logging activities and track deforestation patterns, making a positive impact on conservation efforts.',
    operator_number: 'op006',
    status: 'Actual',
  },
  {
    name: 'Frank Harris',
    phone: '890-123-4567',
    id: 'pilot8',
    email: 'frank.harris@example.com',
    street_address: '8901 Willow Ct',
    zip_code: '89012',
    description:
      'Frank is a skilled drone operator for cinematic aerial footage. Over the years, he has been part of several film productions, capturing breathtaking drone shots for movies and TV shows. He specializes in smooth, cinematic shots in both urban and rural areas.',
    operator_number: 'op008',
    status: 'In Flight',
  },
  {
    name: 'Grace Lee',
    phone: '901-234-5678',
    id: 'pilot9',
    email: 'grace.lee@example.com',
    street_address: '9012 Elm St',
    zip_code: '90123',
    description:
      'Grace is an experienced drone pilot specializing in construction site surveys. She uses drones to capture high-resolution images and 3D models of construction sites, helping project managers track progress and plan efficiently.',
    operator_number: 'op009',
    status: 'In Flight',
  },
  {
    name: 'Henry Clark',
    phone: '012-345-6789',
    id: 'pilot10',
    email: 'henry.clark@example.com',
    street_address: '0123 Fir Dr',
    zip_code: '01234',
    description:
      'Specialized in surveying and mapping with drones, Henry has a wealth of experience in providing accurate topographical surveys for land development projects. His work aids architects and engineers in precise planning and design.',
    operator_number: 'op010',
    status: 'Actual',
  },
  {
    name: 'Ivy Adams',
    phone: '123-456-7890',
    id: 'pilot11',
    email: 'ivy.adams@example.com',
    street_address: '1234 Poplar St',
    zip_code: '12345',
    description:
      'Ivy is a highly skilled drone operator who specializes in creating detailed aerial maps. She has extensive experience with photogrammetry and LiDAR technology, producing high-quality topographic maps for various industries including forestry, mining, and agriculture.',
    operator_number: 'op011',
    status: 'In Flight',
  },
  {
    name: 'Liam Harris',
    phone: '456-789-0123',
    id: 'pilot14',
    email: 'liam.harris@example.com',
    street_address: '4567 Maple Blvd',
    zip_code: '45678',
    description:
      'Liam is a seasoned drone pilot who specializes in surveying land for real estate development. With years of experience in aerial photography, Liam provides clients with stunning visual content that assists in property assessments and marketing.',
    operator_number: 'op014',
    status: 'Deleted',
  },
  {
    name: 'Megan Taylor',
    phone: '567-890-1234',
    id: 'pilot15',
    email: 'megan.taylor@example.com',
    street_address: '5678 Cedar Dr',
    zip_code: '56789',
    description:
      'A skilled drone pilot specializing in infrastructure inspections, Megan has been using drones to monitor and inspect power lines, pipelines, and other infrastructure, ensuring safety and operational efficiency. She has worked on major projects worldwide.',
    operator_number: 'op015',
    status: 'Actual',
  },
  {
    name: 'Nate Johnson',
    phone: '678-901-2345',
    id: 'pilot16',
    email: 'nate.johnson@example.com',
    street_address: '6789 Oak Ln',
    zip_code: '67890',
    description:
      'Nate is a drone pilot for emergency response teams, specializing in providing aerial views during disaster management and search and rescue missions. His ability to capture high-definition footage in real-time has been instrumental in disaster response efforts.',
    operator_number: 'op016',
    status: 'In Flight',
  },
  {
    name: 'Olivia Garcia',
    phone: '789-012-3456',
    id: 'pilot17',
    email: 'olivia.garcia@example.com',
    street_address: '7890 Willow Way',
    zip_code: '78901',
    description:
      'Olivia is a professional drone pilot specializing in aerial mapping and surveying. With expertise in GIS technology, Olivia produces accurate 3D models and topographic maps for construction and urban planning projects.',
    operator_number: 'op017',
    status: 'In Flight',
  },
  {
    name: 'Paul Martinez',
    phone: '890-123-4567',
    id: 'pilot18',
    email: 'paul.martinez@example.com',
    street_address: '8901 Fir Ct',
    zip_code: '89012',
    description:
      'Paul has a wealth of experience in aerial surveillance and security. He specializes in using drones to monitor large public events, ensuring safety and providing real-time data to security personnel for effective crowd control and incident response.',
    operator_number: 'op018',
    status: 'Deleted',
  },
  {
    name: 'Rachel King',
    phone: '012-345-6789',
    id: 'pilot20',
    email: 'rachel.king@example.com',
    street_address: '0123 Pine St',
    zip_code: '01234',
    description:
      'Rachel is a skilled drone pilot with expertise in the real estate sector. She has worked on numerous projects, providing high-quality aerial footage for property listings, helping realtors and clients visualize properties from unique perspectives.',
    operator_number: 'op020',
    status: 'Actual',
  },
];

const getPilots = (): Promise<Pilot[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(pilots);
    }, 300);
  });

const addNewPilot = (pilot: Pilot): Promise<Pilot> =>
  new Promise((resolve) => {
    setTimeout(() => {
      const newPilot: Pilot = {
        ...pilot,
        id: `pilot_${Date.now()}`,
        status: 'Actual',
      };
      pilots = [...pilots, newPilot];
      resolve(newPilot);
    });
  });

export default {
  get: getPilots,
  add: addNewPilot,
};
