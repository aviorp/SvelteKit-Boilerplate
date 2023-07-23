<script>
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Avatar,
		Dropdown,
		DropdownItem,
		DropdownHeader,
		DropdownDivider
	} from 'flowbite-svelte';

	// import { auth } from "@/stores";
</script>

<Navbar let:hidden let:toggle navClass="px-2 sm:px-4 py-2.5 w-full shadow-xl border-b-2">
	<NavBrand href="/">
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span
		>
	</NavBrand>
	<div class="flex items-center md:order-1">
		<Avatar
			class="cursor-pointer"
			id="avatar-menu"
			src="https://media.licdn.com/dms/image/C4D03AQEzRidWv8-98w/profile-displayphoto-shrink_800_800/0/1611322928158?e=2147483647&v=beta&t=cBUW5QXwZs4783a7JFUNxcpEUec17YgWB4fBxBDzn7o"
		/>
		<NavHamburger on:click={toggle} class1="w-full md:flex md:w-auto md:order-1" />
	</div>
	<Dropdown placement="bottom" style="z-index:9999">
		<DropdownHeader>
			<span class="block text-sm"> {'Hello'} </span>
			<span class="block truncate text-sm font-medium"> Papito@flowbite.com </span>
		</DropdownHeader>
		<DropdownItem>Dashboard</DropdownItem>
		<DropdownItem class="flex justify-start  items-center">Settings</DropdownItem>
		<DropdownItem>Earnings</DropdownItem>
		<DropdownDivider />
		<DropdownItem>Sign out</DropdownItem>
	</Dropdown>
	<NavUl {hidden}>
		<a
			href="/dashboard"
			class="block py-2 pr-4 pl-3 md:p-0 rounded text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
		>
			Home
		</a>
		<a
			href="/about"
			class="block py-2 pr-4 pl-3 md:p-0 rounded text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
		>
			About
		</a>

		<a
		href="/faq"
			class="block py-2 pr-4 pl-3 md:p-0 rounded text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
		>
			FAQ
		</a>
		<NavLi href="/pricing">Pricing</NavLi>
		<NavLi href="/contact">Contact</NavLi>
	</NavUl>
</Navbar>

<style>
	a {
		text-decoration: none;
		cursor: pointer;
	}
</style>
