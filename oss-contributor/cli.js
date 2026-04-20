#!/usr/bin/env node
/**
 * OSS Contributor CLI Helper
 * 用于辅助开源贡献的命令行工具
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 配置
const config = require('./config.json');

// 命令行参数
const [command, ...args] = process.argv.slice(2);

switch (command) {
  case 'search':
    searchIssues(args[0] || 'good first issue');
    break;
  case 'clone':
    cloneRepo(args[0]);
    break;
  case 'branch':
    createBranch(args[0], args[1]);
    break;
  case 'pr':
    createPR(args[0]);
    break;
  case 'stats':
    showStats();
    break;
  default:
    showHelp();
}

function searchIssues(label) {
  const query = `language:TypeScript label:"${label}" state:open stars:>${config.minStars}`;
  const url = `https://github.com/search?q=${encodeURIComponent(query)}&type=issues`;
  console.log(`\n🔍 搜索 Issues:\n${url}\n`);
  execSync(`start ${url}`);
}

function cloneRepo(repoUrl) {
  const tempDir = process.env.TEMP || '/tmp';
  const repoName = repoUrl.split('/').pop().replace('.git', '');
  const targetDir = path.join(tempDir, repoName);
  
  console.log(`\n📦 克隆仓库到: ${targetDir}\n`);
  execSync(`git clone --depth 1 ${repoUrl} "${targetDir}"`, { stdio: 'inherit' });
  console.log(`\n✅ 完成！进入目录: cd "${targetDir}"\n`);
}

function createBranch(issueNumber, description) {
  const branchName = `fix/issue-${issueNumber}-${description || 'update'}`;
  console.log(`\n🌿 创建分支: ${branchName}\n`);
  execSync(`git checkout -b ${branchName}`, { stdio: 'inherit' });
}

function createPR(issueNumber) {
  const ghPath = config.ghCliPath || 'gh';
  const title = `fix: resolve issue #${issueNumber}`;
  const body = `Fixes #${issueNumber}`;
  
  console.log(`\n🚀 创建 PR...\n`);
  execSync(`"${ghPath}" pr create --title "${title}" --body "${body}"`, { stdio: 'inherit' });
}

function showStats() {
  const memoryDir = path.join(process.env.USERPROFILE || '~', '.openclaw', 'workspace', 'memory');
  
  console.log('\n📊 OSS 贡献统计:\n');
  
  if (fs.existsSync(memoryDir)) {
    const files = fs.readdirSync(memoryDir).filter(f => f.endsWith('.md'));
    let totalPRs = 0;
    
    files.forEach(file => {
      const content = fs.readFileSync(path.join(memoryDir, file), 'utf-8');
      const prCount = (content.match(/PR: \[#\d+\]/g) || []).length;
      totalPRs += prCount;
    });
    
    console.log(`  总贡献数: ${totalPRs} PRs`);
    console.log(`  记录天数: ${files.length} 天`);
  } else {
    console.log('  暂无贡献记录');
  }
  console.log('');
}

function showHelp() {
  console.log(`
🛠️  OSS Contributor CLI

用法:
  node cli.js <command> [args]

命令:
  search <label>    搜索 GitHub Issues (默认: good first issue)
  clone <url>       克隆仓库到临时目录
  branch <issue>    创建功能分支
  pr <issue>        创建 PR
  stats             显示贡献统计

示例:
  node cli.js search "help wanted"
  node cli.js clone https://github.com/user/repo.git
  node cli.js branch 123 fix-auth
  node cli.js pr 123
  node cli.js stats
`);
}
