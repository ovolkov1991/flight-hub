import { useDispatch, useSelector } from 'react-redux';

import { RootState, AppDispatch } from '../../store';
import {
  markNotificationAsRead,
  deleteNotification,
} from '../../store/slices/organizationSlice';
import { EmptyState, TextButton } from '../../components/ui';
import { organizationAPI } from '../../api';

const Notifications = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { notifications } = useSelector(
    (state: RootState) => state.organization
  );

  const markAsRead = async (id: string) => {
    try {
      await organizationAPI.notification.markAsRead();
      dispatch(markNotificationAsRead(id));
    } catch (error) {
      // NOTE: here we can collect some failed data using Sentry or any other tool
      // and notify user data failed to update
      console.log(error);
    }
  };

  const removeNotification = async (id: string) => {
    try {
      await organizationAPI.notification.delete();
      dispatch(deleteNotification(id));
    } catch (error) {
      // NOTE: here we can collect some failed data using Sentry or any other tool
      // and notify user data failed to update
      console.log(error);
    }
  };

  return (
    <div className='py-8 px-12 min-h-screen'>
      {!notifications.length ? (
        <EmptyState text='Recent Notifications'>
          <p className='text-color-primary'>No notifications yet!</p>
        </EmptyState>
      ) : (
        <section className='text-slate-500'>
          {notifications.map((notification) => {
            const isRead = !!notification.read_at;

            return (
              <div
                key={notification.id}
                className={
                  'border-b border-gray-300 py-4 flex justify-between items-center'
                }
              >
                <div className={`flex-1  ${isRead ? 'opacity-50' : ''}`}>
                  <h3 className='text-lg font-semibold text-color-primary'>
                    {notification.title}
                  </h3>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    {notification.text}
                  </p>
                </div>

                <div className='flex gap-4'>
                  {!isRead && (
                    <TextButton
                      text='Mark as read'
                      className='text-color-secondary'
                      onClick={() => markAsRead(notification.id)}
                    />
                  )}
                  <TextButton
                    text='Delete'
                    className='text-red-400'
                    onClick={() => removeNotification(notification.id)}
                  />
                </div>
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
};

export default Notifications;
