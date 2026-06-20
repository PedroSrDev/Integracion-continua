pipeline {
    agent any

    tools {
        nodejs 'JS18'
    }

    stages {

        stage('Checkout') {
            steps {
                deleteDir()
                echo 'Clonando repositorio...'
                checkout scm
            }
        }

        stage('Instalar dependencias - Backend') {
            steps {
                echo 'Instalando dependencias del backend (NestJS)...'
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Pruebas - Backend') {
            steps {
                echo 'Ejecutando pruebas unitarias...'
                dir('backend') {
                    sh 'npm test -- --passWithNoTests --forceExit'
                }
            }
        }

        stage('Build - Backend') {
            steps {
                echo 'Compilando backend...'
                dir('backend') {
                    sh 'npm run build'
                }
            }
        }

        stage('Build - Docker Images') {
            steps {
                echo 'Construyendo imagenes Docker...'
                sh 'docker compose build'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Desplegando contenedores...'
                sh 'docker compose up -d'
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
