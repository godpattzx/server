import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    studentId: string;
  
    @Column()
    studentName: string;

    @Column()
    studentSname: string;
}
