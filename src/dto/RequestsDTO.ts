export type Request = {
    id: number,
    sla: string,
    status: 'Новый' | 'В работе' | 'Дозапрос информации' | 'На доработке' | 'Завершен'
};