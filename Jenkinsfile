
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'docker build -t jenkins-cicd-aws-demo:latest .'
            }
        }

        stage('Test') {
            steps {
                sh 'docker run --rm jenkins-cicd-aws-demo:latest node --check app.js'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    docker rm -f jenkins-cicd-app || true
                    docker run -d \
                      --name jenkins-cicd-app \
                      --restart unless-stopped \
                      -p 3000:3000 \
                      jenkins-cicd-aws-demo:latest
                '''
            }
        }
    }

    post {
        success {
            echo 'CI/CD pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the Jenkins console output.'
        }
    }
}

