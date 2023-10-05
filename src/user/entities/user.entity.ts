import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    userId: number;

    @Column({ type: 'character varying', length: 55, nullable: false })
    firstName: string;

    @Column({ type: 'character varying', length: 55, nullable: false })
    lastName: string;

    @Column({ type: 'character varying', length: 255, unique: true, nullable: false })
    email: string;

    @Exclude()
    @Column({ type: 'character varying', nullable: false, select: false })
    password: string;

}