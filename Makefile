build:
	sudo docker build -t react-app .

run:
	sudo docker run --net=springboot-mysql-net -d -p 80:80 react-app