<template>
  <div id="page--resume">
    <v-container>
      <v-layout row wrap>
        <v-flex md8 offset-md2>
          <resume-header></resume-header>
          <box title="Bio">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, sunt?
          </box>

          <box title="Education">
            <template
              v-for="item in education"
            >
              <box-info-line
                :title="item.college"
                :subtitle="item.faculty"
                :date="item.date"
                :position="item.degree"
                key="item"
              ></box-info-line>

              <div class="divider"></div>
            </template>
          </box>

          <box title="Work experience">
            <template
              v-for="item in workExperience"
            >
              <box-info-line
                :title="item.place"
                :date="item.date"
                :position="item.position"
                :description="item.description"
                key="item"
              >
                <tags
                  :tags="item.technologies"
                  tags-title="Used:"
                ></tags>
              </box-info-line>
              <div class="divider"></div>
            </template>
          </box>

          <box title="Skills">
            <resume-skills :skills="skills" />
          </box>
          <resume-footer />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import Box from './resume/Box';
  import BoxInfoLine from './resume/box/InfoLine';
  import Tags from './resume/Tags';
  import ResumeHeader from './resume/Header';
  import ResumeFooter from './resume/Footer';
  import ResumeSkills from './resume/Skills';

  export default {
    name: 'PageResume',

    components: {
      Box,
      BoxInfoLine,
      Tags,
      ResumeHeader,
      ResumeFooter,
      ResumeSkills,
    },

    data() {
      return {
        education: [
          {
            college: 'Gdańsk University of Technology',
            faculty: 'Technical Physics & Applied computer science',
            date: '2010-2014',
            degree: 'Bachelor of science',
          },
          {
            college: 'Gdańsk University of Technology',
            faculty: 'Technical Physics & Applied computer science',
            date: '2014-2017',
            degree: 'Master of science',
          },
        ],
        workExperience: [
          {
            place: 'GForces Web Management Polska',
            position: 'Web developer',
            date: '2015 - now',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad fugiat minus necessitatibus odio porro veniam.',
            technologies: ['VueJS', 'PHP', 'Javascript', 'SCRUM', 'TDD & BDD', 'RequireJs', 'Behat'],
          },
        ],
        skills: [
          {
            group: 'PHP',
            tags: ['Yii Framework', 'PHPSpec', 'Behat', 'Kahlan', 'Laravel'],
          },
          {
            group: 'Javascript',
            tags: ['VueJs', 'RequireJS', 'Jasmine', 'Webpack', 'Gulp', 'EcmaScript6'],
          },
          {
            group: 'HTML & CSS',
            tags: ['Bootstrap', 'Sass', 'Material design', 'HTML5'],
          },
          {
            group: 'Others',
            tags: ['Object Oriented Programming', 'MySQL', 'Testing - BDD & TDD', 'JIRA', 'UI/UX', 'Design', 'Clean code'],
          },
        ],
      };
    },
  };
</script>

<style lang="scss">
  @import "../../assets/styles/resume/colors";

  #page--resume {
    ::selection {
      background: rgba($third, .9);
      color: $colorLight;
    }

    background: $colorLight;
    height: 100%;

    .divider {
      &:last-child {
        display: none;
      }
    }

    a {
      color: $third;
      font-weight: bold;
      background-image: linear-gradient(to left,
        transparent,
        transparent 50%,
        $third 50%,
        $third
      );
      background-position: 100% 0;
      background-size: 200% 100%;
      transition: all .25s ease-in-out;
      text-decoration: none;

      &:hover {
        background-position: 0 0;
        color: $colorLight;
      }
    }
  }
</style>
