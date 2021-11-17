var boolzapp = new Vue({
    el: '#container-app',
    data: {
        chatActive: 0,
        search: '',
        contacts:   [   
            {   
            name:   'Michele',   
            avatar:   'img/avatar_1.jpg',   
            visible:   true,   
            messages:   [   
                    {   
                    date:   '10/01/2020   15:30:55',   
                    text:   'Hai   portato   a   spasso   il   cane?',   
                    status:   'sent'   
                    },   
                    {   
                    date:   '10/01/2020   15:50:00',   
                    text:   'Ricordati   di   dargli   da   mangiare',   
                    status:   'sent'   
                    },   
                    {   
                    date:   '10/01/2020   16:15:22',   
                    text:   'Tutto   fatto!',   
                    status:   'received'   
                    }   
                ],   
            },   
            {   
            name:   'Fabio',   
            avatar:   'img/avatar_2.jpg',   
            visible:   false,   
            messages:   [   
                    {   
                    date:   '20/03/2020   16:30:00',   
                    text:   'Ciao   come   stai?',   
                    status:   'sent'   
                    },   
                    {   
                    date:   '20/03/2020   16:30:55',   
                    text:   'Bene   grazie!   Stasera   ci   vediamo?',   
                    status:   'received'   
                    },   
                    {   
                    date:   '20/03/2020   16:35:00',   
                    text:   'Mi   piacerebbe   ma   devo   andare   a   fare   la   spesa.',   
                    status:   'sent'   
                    }   
                    ],   
                },       
              
            {   
            name:   'Samuele',   
            avatar:   'img/avatar_3.jpg',   
            visible:   false,   
            messages:   [   
                    {   
                    date:   '28/03/2020   10:10:40',   
                    text:   'La   Marianna   va   in   campagna',   
                    status:   'received'   
                    },   
                    {   
                    date:   '28/03/2020   10:20:10',   
                    text:   'Sicuro   di   non   aver   sbagliato   chat?',   
                    status:   'sent'   
                    },   
                    {   
                    date:   '28/03/2020   16:15:22',   
                    text:   'Ah   scusa!',   
                    status:   'received'   
                    }   
                    ],   
                },   
            {   
            name:   'Luisa',   
            avatar:   'img/avatar_4.jpg',   
            visible:   false,   
            messages:   [   
                    {   
                    date:   '10/01/2020   15:30:55',   
                    text:   'Lo   sai   che   ha   aperto   una   nuova   pizzeria?',   
                    status:   'sent'   
                    },   
                    {   
                    date:   '10/01/2020   15:50:00',   
                    text:   'Si,   ma   preferirei   andare   al   cinema',   
                    status:   'received'   
                    }   
                    ],   
                },   
            ]   
    },
    methods: {
        openChat(i){
            this.chatActive = i;
        },

        sendMessage(newMess){
            if (newMess.target.value !== "") {
                newMessage =  {   
                    date:   '28/03/2020   10:10:40',   
                    text:   newMess.target.value,   
                    status:   'sent'   
                }, 
                // uso la variabile chat per salvarmi la posizione in modo che se cambio chat prima che mi risponda l'ok non mi arriva su un altra chat
                chat = this.chatActive;
                this.contacts[this.chatActive].messages.push(newMessage);
                 newMess.target.value = '';
                setTimeout(() => {
                    newMessage =  {   
                        date:   '28/03/2020   10:10:40',   
                        text:   'ok',   
                        status:   'received'   
                    },  
                    this.contacts[chat].messages.push(newMessage);
                }, 1000);
            }
        },
    }
});