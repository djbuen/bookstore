import type { ResourceController } from '../types/resource';

// =============================
// Mock Data
// =============================
const users = [
  { name: 'tj' },
  { name: 'ciaran' },
  { name: 'aaron' },
  { name: 'guillermo' },
  { name: 'simon' },
  { name: 'tobi' },
];

// =============================
// Controller Example
// =============================
const UserController: ResourceController = {
  index: (req, res) => {
    res.send(users);
  },

  show: (req, res) => {
    const id = parseInt(req.params.id, 10);
    const user = users[id];
    res.send(user || { error: 'Cannot find user' });
  },

  destroy: (req, res, id) => {
    const destroyed = id in users;
    delete users[id];
    res.send(destroyed ? 'destroyed' : 'Cannot find user');
  },

  range: (req, res, a, b, format) => {
    const range = users.slice(a, b + 1);

    switch (format) {
      case 'json':
        res.send(range);
        break;

      case 'html':
      default:
        const html = `<ul>${range.map(u => `<li>${u.name}</li>`).join('\n')}</ul>`;
        res.send(html);
        break;
    }
  },
};

export { UserController };