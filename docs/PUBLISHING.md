# Publishing Workflows Documentation

This document explains the streamlined GitHub Actions workflows for publishing LCARS Web Components packages.

## 🚀 **Workflow Overview**

The monorepo uses **2 robust, highly optimized workflows** that handle all publishing scenarios:

### **1. CI/CD Pipeline** (`ci.yml`)
- **Triggers**: Push to `main`/`develop`, Pull Requests to `main`
- **Purpose**: Comprehensive quality assurance with parallel job execution
- **Jobs**: 
  - **Setup**: Dependency installation with intelligent caching
  - **Lint**: Code quality checks with ESLint
  - **Test**: Unit test execution with coverage
  - **Build**: Package compilation with Turbo caching
  - **Validate**: Bundle analysis and export verification
- **Features**: Local Turbo caching, artifact caching, job parallelization
- **No Publishing**: Pure validation pipeline

### **2. Version Management & Publishing** (`version.yml`)
- **Triggers**: Push to `main` branch (only when changesets exist)
- **Purpose**: Automated versioning, building, and publishing pipeline
- **Jobs**:
  - **Setup**: Changeset detection and dependency caching
  - **Build**: Quality checks and package compilation
  - **Publish**: Changeset processing and npm publishing
  - **Release**: GitHub release creation with changelogs
  - **Notify**: Success notifications and installation instructions
- **Features**: 
  - Smart changeset detection (skips when no changes)
  - Local Turbo caching for faster builds
  - Comprehensive pre-publish validation
  - Automatic GitHub release creation
  - Artifact caching between jobs

## 📦 **Package Management**

### **Monorepo Structure**
```
packages/
├── lcars/           → @starfleet-technology/lcars
├── lcars-react/     → @starfleet-technology/lcars-react  
└── lcars-vue/       → @starfleet-technology/lcars-vue
```

### **Linked Versioning**
All packages use **linked versioning** - when one changes, all get version bumps to maintain compatibility.

### **Publishing Commands**
```bash
# Development commands
pnpm changeset               # Create a changeset
pnpm changeset:add          # Alternative changeset creation  
pnpm changeset:status       # Check changeset status
pnpm changeset:version      # Bump versions locally (testing only)
pnpm changeset:publish      # Publish locally (not recommended)
pnpm build:packages         # Build only LCARS packages

# Maintenance commands  
pnpm clean                  # Clean all packages
pnpm clean:dist            # Remove all dist directories
pnpm clean:turbo           # Clear Turbo cache
pnpm clean:node_modules    # Remove all node_modules
```

## 🔄 **Publishing Scenarios**

### **Scenario 1: Regular Development Release**
1. **Create changeset**: `pnpm changeset` (describes your changes)
2. **Push to feature branch**: Normal development workflow
3. **Create PR to main**: CI pipeline validates all changes
4. **Merge PR**: Version workflow detects changeset and creates version PR
5. **Merge version PR**: Automatic publishing to npm + GitHub releases

### **Scenario 2: Feature Development** 
1. **Work on feature branch**: Make changes to packages
2. **Create changeset**: `pnpm changeset` before finishing
3. **Push and create PR**: CI validates everything works
4. **Review and merge**: Standard code review process
5. **Automatic versioning**: Happens after merge to main

### **Scenario 3: Hotfix Release**
1. **Create hotfix branch from main**: `git checkout -b hotfix/critical-fix`
2. **Make minimal fix**: Focus on specific issue
3. **Create changeset**: `pnpm changeset` (usually patch)
4. **Push and create PR**: Fast-track review process
5. **Merge immediately**: Automatic publishing follows

## 🔒 **Security & Access**

### **Required Secrets**
- `NPM_TOKEN`: npm authentication token with publish permissions
- `GITHUB_TOKEN`: Automatically provided by GitHub Actions

### **Permissions**
- **Repository**: starfleet-technology owner required
- **Branch Protection**: Workflows only run on protected branches
- **npm Access**: All packages configured with public access

### **Safety Features**
- **Concurrency Control**: Prevents overlapping releases
- **Quality Gates**: All packages must pass lint, test, build
- **Dry Run Option**: Preview changes before publishing
- **Branch Restrictions**: Production workflows limited to `main`

## 🛠 **Configuration Files**

### **Changeset Config** (`.changeset/config.json`)
```json
{
  "access": "public",
  "baseBranch": "main", 
  "linked": [["@starfleet-technology/lcars", "@starfleet-technology/lcars-react", "@starfleet-technology/lcars-vue"]],
  "ignore": []
}
```

### **Package.json Scripts**
Streamlined scripts focused on essential development and maintenance tasks.

### **Turbo Caching**
- **Local Cache**: `.turbo/` directory for local build acceleration  
- **Workflow Caching**: GitHub Actions caches `.turbo` directory between jobs
- **Artifact Caching**: Build outputs cached between workflow jobs

## 🏗 **Architecture Benefits**

### **Performance Optimizations**
- ✅ **Local Turbo Caching**: Fast incremental builds with `.turbo` cache
- ✅ **Job Parallelization**: Lint, test, and validation run simultaneously  
- ✅ **Artifact Caching**: Build outputs cached between workflow jobs
- ✅ **Dependency Caching**: Smart pnpm lockfile-based caching
- ✅ **Incremental Builds**: Only rebuild changed packages

### **Quality & Reliability**  
- ✅ **Multi-stage Validation**: Separate lint, test, build, and validation jobs
- ✅ **Pre-publish Checks**: Comprehensive package integrity validation
- ✅ **Smart Changeset Detection**: Skip workflows when no changes exist
- ✅ **Robust Error Handling**: Graceful failures with detailed reporting
- ✅ **Automatic GitHub Releases**: Consistent release documentation

### **Developer Experience**
- ✅ **Simple Workflow**: Only 2 workflows to understand and maintain
- ✅ **Fast CI**: Parallel jobs with intelligent caching
- ✅ **Clear Status**: Detailed job summaries and notifications  
- ✅ **Zero Configuration**: Works out of the box with sensible defaults
- ✅ **Automated Everything**: From version bumps to GitHub releases

## 🚨 **Troubleshooting**

### **Common Issues**

**NPM_TOKEN not working**
- Verify token has publish permissions
- Check token is not expired
- Ensure it's added to repository secrets

**Workflow not triggering**  
- Check branch protection rules
- Verify you're on the correct branch (`main` for releases)
- Ensure repository owner matches `starfleet-technology`

**Build failures**
- All packages must pass lint/test before publishing
- Check that `pnpm build` works locally
- Verify all package dependencies are correctly defined

**Version conflicts**
- Linked packages must be compatible
- Check changeset status: `pnpm changeset:status`
- Resolve any dependency mismatches

### **Emergency Procedures**

**Failed Release Recovery**
1. Check workflow logs for specific error
2. Fix issues locally
3. Use Manual Release workflow with dry run to verify
4. Re-run with actual publishing enabled

**Rollback Published Version**
1. Use npm deprecate: `npm deprecate @starfleet-technology/lcars@x.x.x "reason"`
2. Publish fixed version immediately
3. Update documentation and notify users

This comprehensive workflow setup ensures reliable, safe, and efficient package publishing for the LCARS Web Components monorepo while maintaining high quality standards and providing flexibility for different release scenarios.