# script para Iniciar con docker automaticamente en linux
# Parar el container
sudo docker container stop brujula-react
sudo docker container rm brujula-react

#Correr el container
sudo docker-compose -f docker-compose.prod.yml up --build -d
# Mensaje del que contenedor paro
echo "brujula-react esta corriendo"