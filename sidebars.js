module.exports = {
  sidebar: [
    'index',
    'workflow',
    'security',
    'errors',
    {
      type: 'category',
      label: 'Launch Game',
      items: ['session-create', 'session-demo'],
    },
    {
      type: 'category',
      label: 'Wallet',
      items: ['balance', 'play', 'rollback'],
    },
    {
      type: 'category',
      label: 'Gift',
      items: ['gift-create', 'gift-cancel'],
    },
    {
      type: 'category',
      label: 'Additional',
      items: ['testing','games','promo'],
    },

  ],
};
