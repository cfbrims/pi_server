import path from 'path';

export const SERVER = {
    'PORT': 80,
    'VIEW_ENGINE': 'ejs'
};

export const DIRECTORY = {
    'VIEWS': path.join(path.resolve(), 'client/view'),
    'PUBLIC': path.join(path.resolve(), 'client/public'),
    'ROUTES': path.join(path.resolve(), 'server/route')
};

export const ROUTES = {
    'INDEX': {
        'name': 'index',
        'path': '/'
    }
};

export const PINS = {
    'POWER': {
        'led1': 0
    },
    'DATA': {
        'led1': 0
    }
};

export const DATABASE = {
    'DATABASE': 'database.json'
}