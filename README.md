# Comment j'ai réalisé ce test technique:

- Je me suis donné un temps limite, l'équivalent d'environ une journée de travail.
- J'ai d'abord pris connaissance des consignes ainsi que du code existant. J'ai ajouté des configs comme eslint et prettier pour être plus à l'aise.
- Ensuite j'ai créé la page d'accueil qui est la liste de toutes les conversations de l'utilisateur connecté, que j'ai découpé en plusieurs composants dont certains qui peuvent être réutilisables. J'ai également créé un context pour pouvoir gérer les data de l'API plus facilement et y avoir accès depuis n'importe quel composant sans faire passer des props à la chaine.
- Une fois la liste des convs accessible, j'ai créé la page détail d'une conversation pour accéder à tous les messages d'une conversation et également pouvoir en envoyer de nouveaux.
- Pour le design je me suis inspiré de ceux fournis.
- J'ai laissé en commentaire dans le fichier /src/utils/getLoggedUserId.ts mes idées pour le user management qui n'est pas mis en place dans cette app.
- J'ai également laissé en commentaire dans le fichier /src/components/templates/MessageTemplate/MessageTemplate.tsx mes idées pour le bonus 1 que je n'ai pas eu le temps de réalisé dans le temps imparti que je me suis fixé.
- Pour le bonus 2, je n'ai pas non plus eu le temps de créer des design mais si l'API est down un simple string 'loading...' apparait sur la page de la liste des conversations, et pour la page détail d'une conversation il y a un check côté serveur qui redirige vers la page de la liste des conversations car la requête pour récupérer tous les messages de la conv a échoué et on voit donc le string 'loading...'.
