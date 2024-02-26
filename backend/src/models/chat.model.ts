import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.model";
import { Message } from "./message.model";

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User)
  user1!: User;

  @ManyToOne(() => User)
  user2!: User;

  @CreateDateColumn()
  created_at!: Date;

  @OneToMany(() => Message, (message) => message.chat)
  messages!: Message[];
}
