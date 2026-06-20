pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Clonando repositorio...'
                checkout scm
            }
        }

        stage('Instalar dependencias - Backend') {
            steps {
                echo 'Instalando dependencias del backend (NestJS)...'
                dir('backend') {
                    bat 'npm install'
                }
            }
        }

        stage('Pruebas - Backend') {
            steps {
                echo 'Ejecutando pruebas unitarias...'
                dir('backend') {
                    bat 'npm test -- --passWithNoTests'
                }
            }
        }

        stage('Build - Backend') {
            steps {
                echo 'Compilando backend...'
                dir('backend') {
                    bat 'npm run build'
                }
            }
        }

        stage('Build - Docker Images') {
            steps {
                echo 'Construyendo imagenes Docker...'
                bat 'docker compose build'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Desplegando contenedores...'
                bat 'docker compose up -d'
            }
        }

    }

    post {
        success {
            echo 'Pipeline ejecutado exitosamente. Aplicacion desplegada.'
        }
        failure {
            echo 'El pipeline fallo. Revisar los logs.'
        }
    }
}
