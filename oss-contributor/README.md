# OSS Contributor Skill

## Quick Reference

### 触发方式
- "帮我找一个开源项目贡献"
- "我想做开源贡献"
- "寻找 good first issue"
- "帮我提交 PR"

### 工作流程

```
┌─────────────────────────────────────────────────────────────┐
│  Step 1: 精准侦察 (Scouting)                                │
│  ├── 搜索 GitHub Issues                                     │
│  ├── 筛选技术栈匹配                                         │
│  ├── 验证项目活跃度                                         │
│  └── 输出 3 个候选 Issue                                    │
├─────────────────────────────────────────────────────────────┤
│  Step 2: 源码分析 (Analysis)                                │
│  ├── 克隆仓库到临时目录                                     │
│  ├── 阅读 README + CONTRIBUTING                             │
│  ├── 定位问题代码                                           │
│  └── 输出修改计划                                           │
├─────────────────────────────────────────────────────────────┤
│  Step 3: 编写修复 (Coding)                                  │
│  ├── 创建功能分支                                           │
│  ├── 编写修复代码                                           │
│  ├── 编写/更新测试                                          │
│  └── 运行测试验证                                           │
├─────────────────────────────────────────────────────────────┤
│  Step 4: 规范提交 (Drafting)                                │
│  ├── 生成 Commit Message                                    │
│  ├── 生成 PR 描述                                           │
│  └── 准备 diff 展示                                         │
├─────────────────────────────────────────────────────────────┤
│  Step 5: 最终确认 (Execution)                               │
│  ├── 展示所有修改                                           │
│  ├── [WAITING FOR APPROVAL]                                 │
│  └── 推送并创建 PR                                          │
└─────────────────────────────────────────────────────────────┘
```

### 配置文件

编辑 `config.json` 调整偏好：

```json
{
  "techStack": ["TypeScript", "React"],  // 你的技术栈
  "minStars": 500,                        // 最小 Star 数
  "maxIssueAge": 30,                      // Issue 最大天数
  "ghCliPath": "D:\\Program Files\\GitHub CLI\\gh.exe"
}
```

### 必需工具

- `git` - 版本控制
- `gh` (GitHub CLI) - 创建 PR
  ```powershell
  winget install GitHub.cli
  gh auth login
  ```

### 文件结构

```
~/.agents/skills/oss-contributor/
├── SKILL.md      # 主流程文档
├── config.json   # 配置参数
├── templates.md  # PR 模板
└── README.md     # 本文件
```

### 贡献记录

所有贡献会自动记录到 `memory/YYYY-MM-DD.md`。
