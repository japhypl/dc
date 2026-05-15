var e={beta:`β`,WIP:`🛠 WIP`,deprecated:`😵 Deprecation notice`,warning:`Warning`},t={beta:`This component is currently in beta status. Some things may be refactored. Watch the change log for now.`,WIP:`This component is currently under development and is prone to change. Please wait for its release.
It will be available in Storybook once it's finished and documented.`,deprecated:`This component is deprecated.`};function n({tag:n=`WIP`,extraMessage:r=null,message:i=null,source:a=null,type:o=`info`}){let s=console[o];s(`%c scale – ${e[n]} `,`background: #E20074; color: #FFF; border-radius: 4px`,`\n\n${i||t[n]} ${r?`
`+r:``}
    `,a===null?``:`
source:`,typeof a==`object`?a:`${a}`,a===null?``:`

`)}export{n as t};