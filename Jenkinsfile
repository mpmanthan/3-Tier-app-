pipeline { 
    agent any 
    
    stages {
        stage('Go to Git ') { 
            steps { 
                  //this git repo 
	          checkout scm
            }
        }        
    
        stage('Build') {
            steps {
                  sh 'docker-compose up -d'
            }
        } 

}
}
