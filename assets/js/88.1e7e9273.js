(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{907:function(t,s,e){"use strict";e.r(s);var a=e(26),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"challenge-0-setup-your-system"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#challenge-0-setup-your-system"}},[t._v("#")]),t._v(" Challenge 0: Setup your System")]),t._v(" "),e("h2",{attrs:{id:"here-is-what-you-will-learn-🎯"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn-🎯"}},[t._v("#")]),t._v(" Here is what you will learn 🎯")]),t._v(" "),e("p",[t._v("In this challenge you will learn:")]),t._v(" "),e("ul",[e("li",[t._v("What prerequisites are needed for dealing with Kubernetes and Azure Kubernetes Service")]),t._v(" "),e("li",[t._v("How to install them")])]),t._v(" "),e("h2",{attrs:{id:"table-of-contents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table Of Contents")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#git-version-control"}},[t._v("Git Version Control")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#azure-cli"}},[t._v("Azure CLI")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#kubectl"}},[t._v("Kubectl")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#helm"}},[t._v("Helm")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#terraform"}},[t._v("Terraform")])])]),t._v(" "),e("h2",{attrs:{id:"git-version-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-version-control"}},[t._v("#")]),t._v(" Git Version Control")]),t._v(" "),e("p",[t._v("The repository is located at GitHub, so - obviously - we'll need a local "),e("em",[t._v("Git client")]),t._v(" to interact with the repository. Download and install the appropriate version of Git for you here: "),e("a",{attrs:{href:"https://git-scm.com/download",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://git-scm.com/download"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"azure-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#azure-cli"}},[t._v("#")]),t._v(" Azure CLI")]),t._v(" "),e("p",[t._v("We will be using the "),e("em",[t._v("Azure command line interface")]),t._v(" to create and interact with resources running in Azure.")]),t._v(" "),e("p",[t._v("To install it, go to "),e("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/install-azure-cli?view=azure-cli-latest",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.microsoft.com/cli/azure/install-azure-cli?view=azure-cli-latest"),e("OutboundLink")],1),t._v(" and choose your platform.")]),t._v(" "),e("p",[t._v("When finished, login to your Azure account from the command line:")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ az login\nYou have logged in. Now "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("let")]),t._v(" us "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" all the subscriptions to "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("which")]),t._v(" you have access"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),e("p",[t._v("A browser window will open, login to Azure and go back to the command prompt. Your active subscription will be shown as JSON, e.g.:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cloudName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AzureCloud"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"isDefault"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your Subscription Name"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"state"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Enabled"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tenantId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"user"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx@example.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("If you have multiple subscriptions, make sure your are working with the correct one!")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ az account show\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cloudName"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AzureCloud"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"isDefault"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" false,\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your Subscription Name"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"state"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Enabled"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tenantId"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx@example.com"')]),t._v(",\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("If that is not the correct one, follow these steps below:")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ az account list -o table\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("the list of available subscriptions is printed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n$ az account "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" -s "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("SUBSCRIPTIONID_YOU_WANT_TO_USE"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("h2",{attrs:{id:"kubectl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kubectl"}},[t._v("#")]),t._v(" Kubectl")]),t._v(" "),e("p",[e("code",[t._v("kubectl")]),t._v(" is the "),e("em",[t._v("command line interface")]),t._v(" for Kubernetes. You will need the tool to interact with the cluster, e.g. to create a pod, a deployment or a service.")]),t._v(" "),e("p",[t._v("If you already have the Azure CLI on your machine, you can just install it using the following command:")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("az aks install-cli\n")])])]),e("p",[t._v("or refer to the documentation for you specific platform.")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-binary-with-curl-on-linux",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install kubectl on Linux"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-on-macos",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install kubectl on macOS"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-on-windows-using-chocolatey-or-scoop",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install kubectl on Windows"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"helm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#helm"}},[t._v("#")]),t._v(" Helm")]),t._v(" "),e("p",[e("code",[t._v("Helm")]),t._v(" is the "),e("em",[t._v("package manager")]),t._v(" for Kubernetes. We will need it for installing several 3rd party components for our solution:")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://helm.sh/docs/intro/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://helm.sh/docs/intro/install/"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"terraform"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#terraform"}},[t._v("#")]),t._v(" Terraform")]),t._v(" "),e("p",[e("code",[t._v("Terraform")]),t._v(" is an "),e("em",[t._v('open-source "infrastructure as code" software tool')]),t._v(" created by HashiCorp. It is a tool for building, changing, and versioning infrastructure safely and efficiently. We will use terraform to create several PaaS services like Azure SQL Db, CosmosDB etc. in this workshop.")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.terraform.io/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.terraform.io/downloads.html"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/day7/"}},[t._v("🔼 Day 7")]),t._v(" | "),e("RouterLink",{attrs:{to:"/day7/challenges/challenge-1.html"}},[t._v("Next challenge ▶")])],1)])}),[],!1,null,null,null);s.default=r.exports}}]);