import { Link } from 'react-router-dom';
import { Box, TextInput, TextArea, Button } from '../../components/ui';

const CreateNewPilot = () => {
  // TODO: add some error checks and save action to RTK
  // use formik or react-form ?

  return (
    <div className='py-8 px-12'>
      <h1 className='text-2xl text-slate-500 font-semibold'>Create Pilot</h1>
      <div className='mt-12 w-2/3 mx-auto'>
        <form>
          <Box header='Pilot Information'>
            <TextInput
              required
              labelText='Pilot Name'
              name='pilot-name'
              placeholder='John Doe'
              errorMessage=''
              value=''
              onChange={() => {}}
            />
            <TextInput
              required
              labelText='Phone'
              name='phone'
              type='phone'
              placeholder='941-288-57'
              errorMessage=''
              value=''
              onChange={() => {}}
            />
            <TextInput
              required
              labelText='Email'
              name='email'
              type='email'
              placeholder='john.doe@gmail.com'
              errorMessage=''
              value=''
              onChange={() => {}}
            />
            <TextInput
              required
              labelText='Street Address'
              name='street'
              placeholder='221B Baker Street, London'
              errorMessage=''
              value=''
              onChange={() => {}}
            />
            <TextInput
              required
              labelText='Zip Code'
              name='zipCode'
              placeholder='W1A 1AA'
              errorMessage=''
              value=''
              onChange={() => {}}
            />
            <TextInput
              required
              labelText='Operator Number'
              name='operator-number'
              placeholder='UPNOR123456'
              errorMessage=''
              value=''
              onChange={() => {}}
            />
            <TextArea
              required
              name='description'
              labelText='Description'
              placeholder='Experienced drone operator, licensed for commercial flights.'
              errorMessage=''
              value=''
              onChange={() => {}}
            />

            <div className='mt-6 mb-2 flex items-center justify-evenly gap-4'>
              <button
                className='btn bg-secondary w-1/2 text-l font-semibold hover:cursor-pointer'
                onClick={() => {}}
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
