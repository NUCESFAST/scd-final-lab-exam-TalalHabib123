pipeline {
    agent any

    stages {
        stage('Build Docker Images') {
            steps {
                script {
                    def services = ['auth', 'classrooms', 'post', 'event-bus', 'client']
                    for (service in services) {
                        bat "docker build -t ${service} ./${service}"
                    }
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'badd24f7-ad18-40df-8508-73eff65a3b05', usernameVariable: 'User', passwordVariable: 'Pass')]) {
                    script {
                        def services = ['auth', 'classrooms', 'post', 'event-bus', 'client']
                        for (service in services) {
                            bat "docker login -u %User% -p %Pass%"
                            bat "docker tag ${service} %User%/${service}"
                            bat "docker push %User%/${service}"
                        }
                    }
                }
            }
        }
    }
}