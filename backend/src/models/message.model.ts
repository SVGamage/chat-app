import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.model";
import { Chat } from "./chat.model";

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Chat, (chat) => chat.messages)
  chat!: Chat;

  @ManyToOne(() => User)
  sender!: User;

  @Column({
    type: "varchar",
  })
  message_text!: string;

  @CreateDateColumn()
  sent_at!: Date;
}
