import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState, AppDispatch } from '../../store';
import { savePilotsList } from '../../store/slices/pilotSlice';
import { pilotAPI } from '../../api';
import { PilotStatus } from '../../types/pilot';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            className={`px-2 py-1 rounded-sm ${
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
        {filteredPilots.map((pilot) => {
          return <p key={pilot.id}>{pilot.name}</p>;
        })}
      </div>
    </div>
  );
};

export default Pilots;
