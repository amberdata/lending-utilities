pipeline {
  agent { ecs { inheritFrom 'base' } }
  stages {
    stage('Install') {
      steps {
        yarn 'install'
      }
    }
    stage('Build') {
      steps {
        yarn 'prepare'
      }
    }
    stage('Test') {
      steps {
        yarn 'preversion'
        yarn 'test'
      }
    }
    stage('Publish') {
      steps {
        withNPMWrapper('nexus-npm') {
          npm 'init -y'
          npm command: 'publish'
        }
      }
    }
  }
}
