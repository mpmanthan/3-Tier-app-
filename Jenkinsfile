pipeline { 
    agent any 
    
    stages {
        stage('Go to Git ') { 
            steps { 
                  //this git repo 
	          checkout scm
            }
        }        
   stages {
        stage('Build') {
            steps {
                  sh 'docker-compose up'
            }
        } 
}
 stages {
        stage('Build') {
            steps {
                  sh 'docker exec -it mongoimport --db app --collection doctor --file ./data/package.json'
                  sh 'docker exec -it mongoimport --db app --collection doctor --file ./data/package-lock.json'
          }
        }
}

}
}
