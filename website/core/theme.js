var theme = {
  plain: {
    color: '#839496',
    background: '#282C34',
  },
  styles: [
    {
      types: ['attr-name', 'comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#93a1a1' /* base1 */,
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#657b83' /* base00 */,
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['property', 'boolean', 'number', 'constant', 'symbol', 'deleted'],
      style: {
        color: '#d33682' /* magenta */,
      },
    },
    {
      types: [
        'attr-value',
        'selector',
        'string',
        'char',
        'builtin',
        'url',
        'inserted',
      ],
      style: {
        color: '#2aa198' /* cyan */,
      },
    },
    {
      types: ['entity'],
      style: {
        color: '#2aa198' /* cyan */,
      },
    },
    {
      types: ['atrule', 'keyword'],
      style: {
        color: '#859900' /* yellow */,
      },
    },
    {
      types: ['tag', 'function'],
      style: {
        color: '#268bd2' /* blue */,
      },
    },
    {
      types: ['regex', 'important', 'variable'],
      style: {
        color: '#cb4b16' /* orange */,
      },
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold',
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['entity'],
      style: {
        cursor: 'help',
      },
    },
  ],
};

module.exports = theme;
