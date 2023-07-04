import { getJestProjects } from '@nx/jest';

export default {
  codeCoverage: true,
  collectCoverage: true,
  coverageReporters: ['json', 'html', 'lcov', 'cobertura'],
  codeCoverageDirectory: 'coverage',
  projects: getJestProjects(),
};
