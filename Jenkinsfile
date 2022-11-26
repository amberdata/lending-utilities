pipeline {
  agent { ecs { inheritFrom 'base' } }
  tools { nodejs 'node16' }
  stages {
    stage('Install & Build') {
      steps {
        sh """
          yarn config set registry "${NPM_CONFIG_REGISTRY}"
          yarn install
        """
      }
    }
    stage('Test') {
      when { not { branch 'master'; } }
      steps {
        sh """
          yarn lint
          yarn test
        """
      }
    }
    stage('Publish') {
      when { branch 'master' }
      steps {
        nodejs(configId:'npmrc-publish',nodeJSInstallationName:'node16') {
          sh """
            npm pkg set publishConfig.registry="${NPM_PRIVATE_REGISTRY}"
            npm pkg delete private
            NPM_CONFIG_REGISTRY=${NPM_PRIVATE_REGISTRY}
            npm publish
          """
        }
      }
    }
  }
}
