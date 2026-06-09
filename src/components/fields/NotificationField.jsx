import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * @uxpindescription Notification bell with dropdown notification list
 */
export default function NotificationField({
  count = 3,
  notifications = [
    { id: 1, title: 'New comment on your post', time: '2 min ago', read: false, avatar: 'JD' },
    { id: 2, title: 'Your report is ready to download', time: '15 min ago', read: false, avatar: '📄' },
    { id: 3, title: 'Meeting reminder: Team standup', time: '1 hr ago', read: true, avatar: '📅' },
    { id: 4, title: 'Alice mentioned you in a comment', time: '3 hr ago', read: true, avatar: 'AL' },
  ],
  defaultOpen = false,
}) {
  const [open, setOpen] = useState(defaultOpen);
  const [items, setItems] = useState(notifications);
  const unread = items.filter(n => !n.read).length;

  const markAllRead = () => setItems(items.map(n => ({ ...n, read: true })));

  return (
    <div style={{ padding: '16px', fontFamily: 'sans-serif' }}>
      <p style={{ marginBottom: 12, fontWeight: 600, color: 'var(--color-text-secondary)' }}>Notification Bell</p>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <button
          onClick={() => setOpen(!open)}
          style={{
            position: 'relative',
            width: 40, height: 40,
            borderRadius: 8,
            border: '1px solid var(--color-border)',
            background: open ? 'var(--color-bg-subtle)' : 'var(--color-surface)',
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18,
          }}
        >
          🔔
          {unread > 0 && (
            <span style={{
              position: 'absolute',
              top: -4, right: -4,
              backgroundColor: 'var(--color-danger)',
              color: 'var(--color-surface)',
              borderRadius: 9999,
              fontSize: 10,
              fontWeight: 700,
              minWidth: 16,
              height: 16,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '0 4px',
              border: '2px solid var(--color-surface)',
            }}>{unread > 9 ? '9+' : unread}</span>
          )}
        </button>

        {open && (
          <div style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            marginTop: 4,
            width: 320,
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 12,
            boxShadow: 'var(--shadow-lg)',
            zIndex: 300,
            overflow: 'hidden',
          }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '12px 16px', borderBottom: '1px solid var(--color-border)',
            }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)' }}>Notifications</span>
              {unread > 0 && (
                <button onClick={markAllRead} style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: 12, color: 'var(--color-accent)', fontWeight: 500,
                }}>Mark all read</button>
              )}
            </div>
            {items.length === 0 ? (
              <div style={{ padding: '24px', textAlign: 'center', color: 'var(--color-text-placeholder)', fontSize: 13 }}>
                No notifications
              </div>
            ) : (
              items.map(n => (
                <div key={n.id} style={{
                  display: 'flex', gap: 12, padding: '12px 16px',
                  backgroundColor: n.read ? 'var(--color-surface)' : 'var(--color-accent-subtle)',
                  borderBottom: '1px solid var(--color-border)',
                  cursor: 'pointer',
                  transition: 'background 0.1s',
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = n.read ? 'var(--color-bg-hover)' : 'var(--color-accent-subtle)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = n.read ? 'var(--color-surface)' : 'var(--color-accent-subtle)'}
                >
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    backgroundColor: 'var(--color-bg-muted)', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: n.avatar.length > 2 ? 18 : 12,
                    fontWeight: 600, color: 'var(--color-text-muted)',
                  }}>{n.avatar}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ margin: '0 0 2px', fontSize: 13, color: 'var(--color-text-secondary)', fontWeight: n.read ? 400 : 500, lineHeight: 1.4 }}>{n.title}</p>
                    <span style={{ fontSize: 11, color: 'var(--color-text-placeholder)' }}>{n.time}</span>
                  </div>
                  {!n.read && (
                    <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--color-accent)', flexShrink: 0, marginTop: 6 }} />
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

NotificationField.propTypes = {
  count: PropTypes.number,
  notifications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    time: PropTypes.string,
    read: PropTypes.bool,
    avatar: PropTypes.string,
  })),
  defaultOpen: PropTypes.bool,
};