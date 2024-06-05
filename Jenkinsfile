pipeline {
    agent any

    stages {
        stage('Build Docker Images') {
            steps {
                script {
                    def services = ['auth', 'classrooms', 'post', 'event-bus', 'client']
                    for (service in services) {
                        // Start of step for 21I-1111
                        bat "docker build -t ${service} ./${service}"
                        // End of step for 21I-1111
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
                            // Start of step for 21I-1111
                            bat "docker login -u %User% -p %Pass%"
                            bat "docker tag ${service} %User%/${service}"
                            bat "docker push %User%/${service}"
                            // End of step for 21I-1111
                        }
                    }
                }
            }
        }
    }
}