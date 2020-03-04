<nav class="navbar navbar-dark fixed-top p-0 shadow">
    <div class="navbar-brand" href="#">
        <a href="#menu-toggle" class="btn text-white" id="menu-toggle"><i class="fas fa-bars"></i></a>
        <span>{{ env('APP_NAME')}}</span>
        <span style="margin-left:120px;"><b>@yield('title')</b></span>
        {{-- <span style="align-text:right;">{{ App\User::getUserInfo('name') }}</span> --}}
    </div>
    @guest
    <div class="nav-item" id="navbarNav">
        <div >
            <a  href="{{ route('login') }}">{{ __('Login') }}</a>
        </div>
        @if (Route::has('register'))
            <div>
                <a href="{{ route('register') }}">{{ __('Register') }}</a>
            </div>
        @endif
    </div>
    @else
    <div class="nav-item">
        <div aria-labelledby="navbarDropdown">
                <a href="{{ route('logout') }}"
                    onclick="event.preventDefault();
                                    document.getElementById('logout-form').submit();">
                    {{ __('Logout') }}
                </a>

                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                    @csrf
                </form>
        </div>
    </div>   
    
    @endguest
    
</nav>