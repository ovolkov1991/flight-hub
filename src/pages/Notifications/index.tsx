import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import EmptyState from '../../components/ui/EmptyState';
import {
  markNotificationAsRead,
  deleteNotification,
} from '../../store/slices/organizationSlice';

const Notifications = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { notifications } = useSelector(
    (state: RootState) => state.organization
  );

  const markAsRead = (id: string) => dispatch(markNotificationAsRead(id));
  const removeNotification = (id: string) => dispatch(deleteNotification(id));

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

                {/* Actions */}
                <div className='flex gap-4'>
                  {!isRead && (
                    <button
                      className='notification-btn text-color-secondary'
                      onClick={() => markAsRead(notification.id)}
                    >
                      Mark as read
                    </button>
                  )}
                  <button
                    className='notification-btn text-red-400'
                    onClick={() => removeNotification(notification.id)}
                  >
                    Delete
                  </button>
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
