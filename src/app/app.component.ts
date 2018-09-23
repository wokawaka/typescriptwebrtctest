import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  numbersList: Array<string> = [];
  step: number = 0;

  addThing() {
    this.step++;
    this.numbersList.push(this.step + " number");
  } 

  localConnection: RTCPeerConnection;
  remoteConnection:string;
  sendChannel:RTCDataChannel;
  receiveChannel:string;

  // dataChannelSend = document.querySelector('textarea#dataChannelSend');
  // dataChannelReceive = document.querySelector('textarea#dataChannelReceive');
  statusText: string = "";
  localSendText: string = "";

  startButton = document.querySelector('button#startButton');
  sendButton = document.querySelector('button#sendButton');
  closeButton = document.querySelector('button#closeButton');

  changeStatus(statusMessage:string){
    var dt : Date = new Date();
    this.statusText = (dt.getHours() + ":" +dt.getMinutes() +":"+ dt.getSeconds()+ ":" + dt.getMilliseconds()) + "> " + statusMessage + "\r\n"  + this.statusText;
  }

  createConnection (){
    this.changeStatus("createConnection");
    
    // window.localConnection = localConnection = new RTCPeerConnection(servers);
    this.localConnection = new RTCPeerConnection(null);

    this.changeStatus("new RTCPeerConnection");
    console.log(this.localConnection);

    // sendChannel = localConnection.createDataChannel('sendDataChannel');
    this.sendChannel = this.localConnection.createDataChannel('sendDataChannel');
    console.log(this.sendChannel);
  
    // localConnection.onicecandidate = e => {
    //   onIceCandidate(localConnection, e);
    // };
    // sendChannel.onopen = onSendChannelStateChange;
    // sendChannel.onclose = onSendChannelStateChange;
  
    // window.remoteConnection = remoteConnection = new RTCPeerConnection(servers);
    // console.log('Created remote peer connection object remoteConnection');
  
    // remoteConnection.onicecandidate = e => {
    //   onIceCandidate(remoteConnection, e);
    // };
    // remoteConnection.ondatachannel = receiveChannelCallback;
  
    // localConnection.createOffer().then(
    //   gotDescription1,
    //   onCreateSessionDescriptionError
    // );
    // startButton.disabled = true;
    // closeButton.disabled = false;
  }
}