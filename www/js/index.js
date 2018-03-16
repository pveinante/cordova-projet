/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.getElementById('boutonValid').addEventListener('click', this.requete.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    
    requete: function(){
	//	var ville = document.getElementById("zoneTexte").value;
		var MyRequest = new XMLHttpRequest();

		MyRequest.onreadystatechange = function(event) {
			if (this.readyState === XMLHttpRequest.DONE) {
				if (this.status === 200) {
					console.log("Réponse reçue: %s", this.responseText);
					var reponse = MyRequest.responseText;
				} else {
					console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
				}
			}	
		};
		MyRequest.open('GET', "https://follow-the-rhythm-jbelderrain.c9users.io/follow_the_rhythm/web/app_dev.php/API/news", false);
		MyRequest.send(null);
		console.log(MyRequest.responseText);
		var reponse = JSON.parse(MyRequest.responseText);
		var machin = reponse[0];
		var remachin = JSON.parse(machin);
		var result = remachin.id;
		console.log(result);
		document.write(result);
	}
};



app.initialize();