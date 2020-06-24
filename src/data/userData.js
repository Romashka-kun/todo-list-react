const demo = {
  list: [
    {
      id: 3,
      name: 'Проект для экзамена',
      description: 'К 25 июня для дисциплины "Информационные технологии" нужно сделать проект "ТУДУЛИСТ"',
    },
  ],
  task: {
    0: {
      listId: 3,
      text: 'Открыть ноутбук',
      completed: true,
      priority: 0,
      deadline: 0,
    },
    1: {
      listId: 3,
      text: 'Запустить вебшторм',
      completed: true,
      priority: 0,
      deadline: 0,
    },
    2: {
      listId: 3,
      text: 'Сделать бд из жс объекта!!1',
      completed: false,
      priority: 0,
      deadline: 0,
    },
    3: {
      listId: 0,
      text: 'Не сходить на голосование',
      completed: false,
      priority: 0,
      deadline: 0,
    },
    4: {
      listId: 3,
      text: 'Сделать всё остальное',
      completed: false,
      priority: 0,
      deadline: 0,
    },
  },
};

export default demo;