import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../store';
import { addNewPilot } from '../../store/slices/pilotSlice';
import { Box, TextInput, TextArea } from '../../components/ui';
import pilotValidationSchema from '../../validation/pilotValidationSchema';
import { pilotAPI } from '../../api';
import { Pilot } from '../../types/pilot';

const CreateNewPilot = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(pilotValidationSchema),
  });

  const onSubmit = async (data: unknown) => {
    try {
      const pilot = data as Pilot;
      const newPilot = await pilotAPI.add(pilot);

      dispatch(addNewPilot(newPilot));
      navigate('/pilots');
    } catch (error) {
      // NOTE: here we can collect some failed data using Sentry or any other tool
      // and notify user data failed to update
      console.log(error);
    }
  };

  return (
    <div className='py-8 px-12'>
      <h1 className='text-2xl text-slate-500 font-semibold'>Create Pilot</h1>
      <div className='mt-12 w-2/3 mx-auto'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box header='Pilot Information'>
            <TextInput
              required
              labelText='Pilot Name'
              {...register('name')}
              placeholder='John Doe'
              errorMessage={errors.name?.message ?? ''}
            />
            <TextInput
              required
              labelText='Phone'
              {...register('phone')}
              placeholder='941-288-57'
              errorMessage={errors.phone?.message ?? ''}
            />
            <TextInput
              required
              labelText='Email'
              {...register('email')}
              placeholder='john.doe@gmail.com'
              errorMessage={errors.email?.message ?? ''}
            />
            <TextInput
              required
              labelText='Street Address'
              {...register('street_address')}
              placeholder='221B Baker Street, London'
              errorMessage={errors.street_address?.message ?? ''}
            />
            <TextInput
              required
              labelText='Zip Code'
              {...register('zip_code')}
              placeholder='W1A 1AA'
              errorMessage={errors.zip_code?.message ?? ''}
            />
            <TextInput
              required
              labelText='Operator Number'
              {...register('operator_number')}
              placeholder='UPNOR123456'
              errorMessage={errors.operator_number?.message ?? ''}
            />
            <TextArea
              required
              labelText='Description'
              {...register('description')}
              placeholder='Experienced drone operator, licensed for commercial flights.'
              errorMessage={errors.description?.message ?? ''}
            />

            <div className='mt-6 mb-2 flex items-center justify-evenly gap-4'>
              <button
                type='submit'
                className='btn bg-secondary w-1/2 text-l font-semibold hover:cursor-pointer'
              >
                Invite
              </button>
              <Link
                to='/pilots'
                className='text-center text-slate-500 hover:text-slate-700 text-l font-semibold w-1/2'
              >
                Cancel
              </Link>
            </div>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default CreateNewPilot;
