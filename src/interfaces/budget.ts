
export interface IBudgetCourse{
	userId?: string;
	courseId?: string;
    transactions: Array<{ amount: number; date: Date }>,
    afiliateTransactions: Array<{ amount: number; date: Date; userId: string }>,
    totalAmount: number,
    totalTransactions: number,
}
