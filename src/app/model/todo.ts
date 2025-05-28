export interface Todo{
    id: number; 
    title: string;
    description: string;
    createdAt: string;  
    dueDate: string; 
    status: boolean; 
    categoryId: number;
    completedAt : string | null; //forse category
}