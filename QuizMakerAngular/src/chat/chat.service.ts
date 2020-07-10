import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import { environment } from 'src/environments/environment';

export class ChatService {
    private url = environment.endpoints.backend;
    private socket;

    constructor() {
        this.socket = io(this.url);
    }

    public sendMessage(message) {
        this.socket.emit('new-message', message);
    }

    //Every time the socket receives a new message, use observer.next() to forward it to observers
    public getMessages = () => {
        return Observable.create((observer) => {
            this.socket.on('new-message', (message) => {
                observer.next(message);
            });
        });
    }
}
