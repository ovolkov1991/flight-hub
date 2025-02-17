import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MaterialReactTable } from 'material-react-table';

import { RootState, AppDispatch } from '../../store';
import { savePilotsList } from '../../store/slices/pilotSlice';
import { pilotAPI } from '../../api';
import { PilotStatus } from '../../types/pilot';
import { columns } from './columns';

type PilotsFilter = 'All' | PilotStatus;
const filter: PilotsFilter[] = ['All', 'In Flight', 'Actual', 'Deleted'];

const Pilots = () => {
  const dispatch = useDispatch<AppDispatch>();
  const storedPilots = useSelector((state: RootState) => state.pilots.list);
  const [selectedFilter, setSelectedFilter] = useState<PilotsFilter>('All');
  const getAllPilots = async () => {
    const pilots = await pilotAPI.get();
    dispatch(savePilotsList(pilots));
  };

  useEffect(() => {
    getAllPilots();
  }, []);

  const filteredPilots =
    selectedFilter === 'All'
      ? storedPilots
      : storedPilots.filter((pilot) => pilot.status === selectedFilter);
  return (
    <div className='py-8 px-12'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl text-slate-500 font-semibold'>Pilots</h1>
        <Link to='/pilots/create' className='btn bg-secondary'>
          + Create
        </Link>
      </div>

      <div className='mt-8 flex gap-4'>
        {filter.map((status: PilotsFilter) => (
          <button
            key={status}
            className={`px-4 py-2 rounded-sm ${
              selectedFilter === status
                ? 'bg-secondary text-white font-semibold'
                : 'bg-gray-200 text-slate-700'
            }`}
            onClick={() => setSelectedFilter(status)}
          >
            {status}
          </button>
        ))}
      </div>

      <div className='mt-8'>
        <div className='mt-8'>
          <MaterialReactTable
            columns={columns}
            data={filteredPilots}
            enablePagination
            initialState={{
              pagination: {
                pageIndex: 0,
                pageSize: 5,
              },
            }}
            muiTableHeadCellProps={{
              sx: {
                backgroundColor: 'lightgray',
                color: '#000e4e',
                fontWeight: 600,
              },
            }}
            enableTopToolbar={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Pilots;
