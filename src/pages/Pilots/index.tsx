import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState, AppDispatch } from '../../store';
import { savePilotsList } from '../../store/slices/pilotSlice';
import { pilotAPI } from '../../api';

const Pilots = () => {
  const dispatch = useDispatch<AppDispatch>();
  const storedPilots = useSelector((state: RootState) => state.pilots.list);

  const getAllPilots = async () => {
    const pilots = await pilotAPI.get();
    dispatch(savePilotsList(pilots));
  };

  useEffect(() => {
    getAllPilots();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='py-8 px-12'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl text-slate-500 font-semibold'>Pilots</h1>
        <Link to='/pilots/create' className='btn bg-secondary'>
          + Create
        </Link>
      </div>

      <div className='mt-8'>
        {storedPilots.map((pilot) => {
          return <p key={pilot.id}>{pilot.name}</p>;
        })}
      </div>
    </div>
  );
};

export default Pilots;
