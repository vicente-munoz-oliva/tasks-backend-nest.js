import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    taskId: number;

    @Column({ nullable: false, type: 'character varying', length: 255 })
    name: string;

    @Column({ nullable: false, type: 'text' })
    description: string;

    @Column({ nullable: false, type: 'date' })
    dueDate: Date;

    @CreateDateColumn({ readonly: true })
    createdAt: Date;

    @Column({ type: "int", nullable: true })
    userId: number;

}
